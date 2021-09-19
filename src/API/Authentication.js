const express = require("express");
const router = express.Router();
const tokenmiddleware= require("../Middleware/Authtoken.js")
const Controller_Account=require("../Controllers/Controller_account.js")
const nodemailer= require("nodemailer")







router.post("/signup", async (req, res) => {
    try {

      
      const {
        lastname,
        firstname,
        email,
        password,
       
        
      } = req.body;
 
      
      // console.log(req.body)
      const checkuser = await Controller_Account.finduser(email);
      if (checkuser === false) {
   
       
          let level="Medal"
          let history=[]
          let lovelist=[]
          let address=""
          let phone=""



          console.log(firstname,lastname,email,password)
        const User = await Controller_Account.signup(
        
          firstname,
          lastname,
          email,
          password,
          history,
          level,
          lovelist,
          address,
          phone,
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
                      text: 'Hello customer nice to see you ', // Nội dung mail dạng text
                      html:`<p>Your email:${email}</p>
                           <p> password:${password}   </p>
                          <p> <a href="http://localhost:3000/Account">Sign In for your buy</a> </p>
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
      console.log(results)
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




router.post("/lovelist",async (req,res)=>{



  try { 


    const {lovelist,email}=req.body

 
    
 
  let result= await  Controller_Account.Getlovelist(email,lovelist)

  res.send(result)

    } catch (err) {
    return {
      status: "Have error",
      message: err.toString(),
    };
  }
  
})








router.post("/updatelovelist",async(req,res)=>{
  try { 

    

    
    const {lovelist,email}=req.body

 
    console.log(lovelist,email)
 
  let result= await  Controller_Account.Updatelovelist(email,lovelist)

  res.send(result)

    } catch (err) {
    return {
      status: "Have error",
      message: err.toString(),
    };
  }

  })
 


router.get("/user",async(req,res)=>{

  try { 

    
 
  
  let result= await  Controller_Account.Getusers()

  console.log(result)
  res.send(result)

    } catch (err) {
    return {
      status: "Have error",
      message: err.toString(),
    };
  }


})


router.post("/reset",async(req,res)=>{

  try { 

    
 
  
    const {Email} =req.body

    let result = await Controller_Account.Resetpassword(Email)

    if(result)
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
            console.log('Kết nối thành công!',Email);
            var mail = {
                from: 'lytuanvinh1@gmail.com', // Địa chỉ email của người gửi
                to: Email, // Địa chỉ email của người gửi
                subject: 'WelCome new customer created account from my-Ecommerce website', // Tiêu đề mail
                text: 'Hello customer nice to see you ', // Nội dung mail dạng text
                html:`<p>Your email:${Email}</p>
                     <p> your reset password:${result}   </p>
                    <p> <a href="http://localhost:3000/Account">Sign In for your buy</a> </p>
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

    res.send({status:true, message: "Success" });
    

    
      
    }

  
      } catch (err) {
      return {
        status: "Have error",
        message: err.toString(),
      };
    }
}
)


router.post("/updatecontact",async(req,res)=>{

  try { 

    console.log(req.body)

    const {Email,Address,Phone }=req.body
 
  
  let result= await  Controller_Account.UpdateContact(Address,Phone,Email)


  res.send(result)

    } catch (err) {
    return {
     
      message: err.toString(),
    };
  }


})

  module.exports = router;
