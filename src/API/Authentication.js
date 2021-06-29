const express = require("express");
const router = express.Router();
const tokenmiddleware= require("../Middleware/Authtoken.js")
const Controller_Account=require("../Controllers/Controller_account.js")
const nodemailer= require("nodemailer")


router.post("/signup", async (req, res) => {
    try {

      
      const {
        lastname,
        fristname,
        email,
        password,
       
        
      } = req.body;
 
      
      // console.log(req.body)
      const checkuser = await Controller_Account.finduser(email);
      if (checkuser === false) {
   
       
          let level="Medal"
          let history=[]
          let lovelist=[]
        const User = await Controller_Account.signup(
        
          fristname,
          lastname,
          email,
          password,
          history,
          level,
          lovelist
        );

        if(User==true)  
          { 
           
            const option = {
              
              host: 'smtp.gmail.com',
              port: 465,
             secure: true,
              auth: {
                  user: 'lytuanvinh1@gmail.com', // email hoặc username
                  pass: 'LoneLyBoysv12@' // password
              }
          };
           
             let transporter = nodemailer.createTransport(option);
             transporter.verify(function(error, success) {
              // Nếu có lỗi.
              if (error) {
                  console.log(error);
              } else { //Nếu thành công.
                  console.log('Kết nối thành công!',email);
                  var mail = {
                      from: 'lytuanvinh1@gmail.com', // Địa chỉ email của người gửi
                      to: email, // Địa chỉ email của người gửi
                      subject: 'WelCome new customer created account from my-Ecommerce website', // Tiêu đề mail
                      text: 'Toidicode.com học lập trình online miễn phí', // Nội dung mail dạng text
                      html:`<br>Your email:${email} and password:${password}   </br>`
                  };
                  //Tiến hành gửi email
                  transporter.sendMail(mail, function(error, info) {
                      if (error) { // nếu có lỗi
                          console.log(error);
                      } else { //nếu thành công
                          console.log('Email sent: ' + info.response,mail);
                      }
                  });
              }
          });

          res.send({status:true, message: "Your email has been created successfully" });
          
      
          
            
          }
      } else {
        res.send({status:false, message: "Your email already exists "});
      }
    } catch (err) {
      return {
        status: "Have error",
        message: err.toString(),
      };
    }
  });



  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

        
  
      const results = await Controller_Account.login(email, password);
  
      res.send(results);
    } catch (err) {
      return {
        status: "Have error",
        message: err.toString(),
      };
    }
  }); 


  router.post("/profile", tokenmiddleware.checkToken, async (req, res) => {
    try {
      res.send(req.data);
    } catch (err) {
      return {
        status: "Have error",
        message: err.toString(),
      };
    }
  });







  module.exports = router;
