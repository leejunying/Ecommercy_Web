const express = require("express");
const router = express.Router();
const Controller_account=require("../Controllers/Controller_account.js")
const Controller_payments=require("../Controllers/Controller_payment.js")
const nodemailer= require("nodemailer")


  router.post("/add", async (req, res) => {
    try {
        
        const {

            Email,
            Items,
            Itemsdetail,
            Amount,
            History,


        }=req.body

 
        let data = await Controller_payments.Addpayments(Email,Items,Amount,Itemsdetail)

        let history= await Controller_account.Addhistory(Email,History)
        
        
        if(data==true && history==true)
        {

          const option = {
              
            host: 'smtp.gmail.com',
            port: 465,
           secure: true,
            auth: {
                user: 'lytuanvinh1@gmail.com', // email hoặc username
                pass: 'LoneLyBoysv12@' // password
            }
          }
          let transporter = nodemailer.createTransport(option);
          transporter.verify(function(error, success) {
           // Nếu có lỗi.
           if (error) {
               console.log(error);
           } else { //Nếu thành công.
               console.log('Kết nối thành công!',Email);
               var mail = {
                   from: 'lytuanvinh1@gmail.com', // Địa chỉ email của người gửi
                   to: Email, // Địa chỉ email của người gửi
                   subject: 'Congratulations on your purchase of my-Ecommerce website', // Tiêu đề mail
                   text: 'Your payment is ', // Nội dung mail dạng text
                   html:`<p>Product:${Items}</p>
                        <p>  Total:${Amount}   </p>
                        <p> hope you are satisfied with us service </p>
                       <p> <a href="http://localhost:3000/Profile">Your history was update</a> </p>

                        `
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

       res.send({message:"Done"});



        
        } 
        if(data==false)
        res.send({message:"save payments error"})
        if(history==false)
        res.send({message:"save history error"})

    
    } catch (err) {
      return {
        status: "Have error",
        message: err.toString(),
      };
    }
  });







  module.exports = router;
