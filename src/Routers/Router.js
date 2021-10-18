const express = require("express");
const router = express.Router();
// const AuthApi = require("../API/authapi.js");

const Manage_Products = require("../API/Products.js")
const Manage_Accounts = require("../API/Authentication.js")
const Manage_Payments = require("../API/Payment.js")
const Manage_Admin = require("../API/Admin")
const Manage_Chat = require("../API/Chatroom")
const Manage_Blog = require("../API/Blog")

router.use("/products", Manage_Products);

router.use("/account", Manage_Accounts)

router.use("/payment", Manage_Payments)

router.use("/admin", Manage_Admin)

router.use("/chatbox", Manage_Chat)

router.use("/blog", Manage_Blog)


module.exports = router;