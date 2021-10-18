const Products_Model = require("../Models/Products");
const Payments_Model = require("../Models/Payment");
const Users_Model = require("../Models/Account");
const Blog_Model = require("../Models/Blog");
const Image_Model = require("../Models/Image");
const Getdata = async () => {
  try {
    let products = await Products_Model.find().sort({ create_date: -1 });

    let users = await Users_Model.find().sort({ create_date: -1 });

    let payments = await Payments_Model.find().sort({ create_date: -1 });

    let blogs = await Image_Model.find()
      .populate("post")
      .sort({ create_date: -1 });

    return [products, users, payments, blogs];
  } catch (err) {
    return err;
  }
};

module.exports = {
  Getdata,
};
