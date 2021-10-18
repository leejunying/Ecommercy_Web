const express = require("express");
const router = express.Router();

const Controller=require("../Controllers/Controller_admin")
 


router.get("/data",async(req,res)=>
{
 
    
let results= await Controller.Getdata()


 console.log(results)
res.send(results)


})




module.exports = router;
