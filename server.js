const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Router = require("./src/Routers/Router.js");
require("dotenv").config();
const cors = require("cors");

const app = express();
var server = require("http").Server(app);
const Controller_chat = require("./src/Controllers/Controller_Chat");

var io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["my-custom-header"],
  },
});

server.listen(process.env.PORT, () => {
  `Sever on ${process.env.PORT}`;
});

app.use(bodyParser.json({ limit: "30mb" }));
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

var whitelist = ["http://localhost:3000", "http://localhost:3001"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

const Ecommerce = require("./Configs/Database.js");

mongoose
  .connect(Ecommerce.URL_DB, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database Ecommerce");
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

app.use("/", Router);

//Socket.io realtime data
io.on("connection", async (socket) => {
  let count = await Controller_chat.Countroom();

  let allroom = await Controller_chat.Getroom();
  var roomid = count + 1;

  socket.on("Client", async (data) => {
    if (data == "Client") {
      console.log("user connected");

      var guestid = `Guest_${roomid}`;
      let result = await Controller_chat.Createchatroom(roomid, [
        guestid,
        "admin",
      ]);
      io.emit("Newroom", result);
    }

    if (data == "admin") {
      roomid = 0;
      console.log("admin connected", roomid);
      io.emit("admin_status", "online");
    }
  });

  //Listen  from Client user

  socket.on(`${roomid}`, async (client) => {
    console.log(roomid, client);
    let newmessage = await Controller_chat.Addmessage(client);

    console.log(newmessage);
    io.emit(`res_${roomid}`, newmessage);
  });

  //Listen from admin

  socket.on("admin_message", async (message) => {
    let addnewmessage = await Controller_chat.Addmessage(message);

    console.log(message.Room);

    io.emit(`admin_${message.Room}`, message);
    io.emit("admin_status", "online");
  });

  socket.on("disconnect", async () => {
    if (roomid != 0) {
      let updateroom = await Controller_chat.Updateroom(roomid);

      console.log("user disconnected", roomid);
      setTimeout(() => {
        io.emit("Client_off", `${roomid}`);
      }, 1000);
    } else {
      io.emit("Client_off", `admin disconnected`);

      let room = await Controller_chat.Clearall();

      console.log(room);
    }
  });
});
