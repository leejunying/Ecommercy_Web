const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
 
const Router = require("./src/Routers/Router.js");
require("dotenv").config();
const cors = require("cors");

const app = express();


app.use(bodyParser.json());
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};


app.use(cors(corsOptions));

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
app.listen(process.env.PORT, () => {
  console.log(`server  started at port ${process.env.PORT}`);
});
