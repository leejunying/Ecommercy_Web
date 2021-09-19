const express = require("express");
const router = express.Router();

const Controller=require("../Controllers/Controller_admin")
 


router.get("/data",async(req,res)=>
{
 
    
let results= await Controller.Getdata()


res.send(results)


})




module.exports = router;
