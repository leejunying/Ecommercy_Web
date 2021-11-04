const { json } = require("body-parser");
const Account_Model = require("../Models/Account.js");
const Products_Model = require("../Models/Products");
const bcrypt = require("bcryptjs");
const { restart } = require("nodemon");
const createtoken = require("../Utils/token.js");
var randomstring = require("randomstring");

const finduser = async (email) => {
  try {
    const userFind = await Account_Model.findOne(
      {
        Email: email,
      },
      function (err, doc) {}
    );
    if (!userFind) {
      return false;
    }
    return true;
  } catch (err) {
    return {
      message: err.toString(),
    };
  }
};

const signup = async (
  Firstname,
  Lastname,
  Email,
  Password,
  History,
  Level,
  Lovelist,
  Address,
  Phone
) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(Password, salt);

    const user = new Account_Model({
      Firstname,
      Lastname,
      Email,
      Password: hash,
      History,
      Level,
      Lovelist,
      Address,
      Phone,
    });

    const result = await Account_Model.create({
      Firstname: Firstname,
      Lastname: Lastname,
      Email: Email,
      Password: hash,
      History: History,
      Level: Level,
      Lovelist: Lovelist,
      Address: Address,
      Phone: Phone,
    });

    // let transporter = nodemailer.createTransport({
    //     host: "MyEcommerce-LeeJunYing.com",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: 'lytuanvinh1@gmail.com', // generated ethereal user
    //         pass: 'LoneLyBoysv12@', // generated ethereal password
    //     },
    // });

    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //     from: '"Fred Foo 👻" <lytuanvinh1@gmail.com>', // sender address
    //     to: `${Email}`, // list of receivers
    //     subject: "Welcome customer created new account ✔", // Subject line
    //     html: ` <b>Email:${Email} </b>
    //         <b>Password: ${Password}</b>`, // html body
    // });

    // console.log("Message sent: %s", info.messageId);

    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    console.log(result);

    if (!result) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

const login = async (Email, Password) => {
  try {
    const validateemail = await Account_Model.findOne({ Email: Email });
    //    console.log(validateemail)

    const hash = validateemail.Password;

    if ((await bcrypt.compare(Password, hash)) === true) {
      let token = await createtoken.generateToken(validateemail);

      return {
        message: true,
        token: token,
      };
    } else {
      return {
        message: false,
      };
    }
  } catch (err) {
    return {
      status: 3,
      message: false,
    };
  }
};

const Addhistory = async (Email, History) => {
  try {
    //updateONe 4 option (filler ,update,option, callback)

    const result = await Account_Model.updateOne(
      { Email: Email },
      { History: History }
    );

    if (!result) return false;

    return true;
  } catch (err) {
    return {
      message: err.toString(),
    };
  }
};

const Getlovelist = async (Email, lovelist) => {
  let productinfo = [];

  for (let value of lovelist)
    productinfo.push(await Products_Model.find({ Name: value }));

  return productinfo;
};

const Updatelovelist = async (Email, lovelist) => {
  try {
    let result = await Account_Model.updateOne(
      { Email: Email },
      { Lovelist: lovelist }
    );
    console.log(result);

    return result;
  } catch (err) {
    return { message: "Error" };
  }
};

const Getusers = async () => {
  try {
    let result = await Account_Model.find();
    console.log(result);

    return result;
  } catch (err) {
    return { message: "Error" };
  }
};

const Resetpassword = async (Email) => {
  try {
    let newpassword = randomstring.generate(8);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newpassword, salt);
    console.log(newpassword);
    let result = await Account_Model.updateOne(
      { Email: Email },
      { Password: hash }
    );

    if (result) return newpassword;
  } catch (err) {
    return { message: "Error" };
  }
};

const UpdateContact = async (newAddress, newPhone, Email) => {
  try {
    let result = await Account_Model.updateOne(
      { Email: Email },
      { Address: newAddress, Phone: newPhone }
    );

    if (result.nModified == 1) {
      return true;
    }
  } catch (err) {
    return { message: false };
  }
};

module.exports = {
  signup,
  finduser,
  login,
  Addhistory,
  Getlovelist,
  Updatelovelist,
  Getusers,
  Resetpassword,
  UpdateContact,
};
