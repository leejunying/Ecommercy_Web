const express = require("express");
const router = express.Router();
// const AuthApi = require("../API/authapi.js");

const Manage_Products= require("../API/Products.js")
const Manage_Accounts=require("../API/Authentication.js")

 

router.use("/products",Manage_Products);

router.use("/account",Manage_Accounts)


module.exports = router;
