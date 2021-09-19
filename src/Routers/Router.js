const express = require("express");
const router = express.Router();
// const AuthApi = require("../API/authapi.js");

const Manage_Products= require("../API/Products.js")
const Manage_Accounts=require("../API/Authentication.js")
const Manage_Payments=require("../API/Payment.js")
const Mange_Admin =require ("../API/Admin")
const Mange_Chat=require("../API/Chatroom")

router.use("/products",Manage_Products);

router.use("/account",Manage_Accounts)

router.use("/payment",Manage_Payments)

router.use("/admin",Mange_Admin)

router.use("/chatbox",Mange_Chat)
 

module.exports = router;
