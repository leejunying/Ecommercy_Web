const { json } = require("body-parser");
const  Account_Model = require("../Models/Account.js")
const bcrypt = require("bcryptjs");
const { restart } = require("nodemon");
const createtoken = require("../Utils/token.js");
const nodemailer= require("nodemailer")



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
}


const signup = async (
     Fristname,
    Lastname,
    Email,
    Password,
    History,
    Level,
    Lovelist,
  ) => {
    try {


   
    
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(Password, salt);
  
      const user = new  Account_Model({
        Fristname,
        Lastname,
        Email,
        Password:hash,
        History,
        Level,
        Lovelist,
      });

      
      const result = await user.save();

      // let transporter = nodemailer.createTransport({
      //   host: "MyEcommerce-LeeJunYing.com",
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      //   auth: {
      //     user: 'lytuanvinh1@gmail.com', // generated ethereal user
      //     pass: 'LoneLyBoysv12@', // generated ethereal password
      //   },
      // });
    
      // // send mail with defined transport object
      // let info = await transporter.sendMail({
      //   from: '"Fred Foo 👻" <lytuanvinh1@gmail.com>', // sender address
      //   to: `${Email}`, // list of receivers
      //   subject: "Welcome customer created new account ✔", // Subject line
      //   html: ` <b>Email:${Email} </b>
      //           <b>Password: ${Password}</b>`, // html body
      // });
    
      // console.log("Message sent: %s", info.messageId);
    
    
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      

 
      if (!result) {
        return  false
      }
      return  true
    } catch (err) {
      return  false
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
          message: token,
        };
      } else {
        return {
          message: false,
        };
      }
    } catch (err) {
      return {
        status: 3,
        message: err.toString(),
      };
    }
  };




  



  module.exports = {
    signup,
    finduser,
    login,
    
  };
  