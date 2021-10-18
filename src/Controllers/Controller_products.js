const { json } = require("body-parser");
const Products_Model = require("../Models/Products.js");

const Add = async (data) => {
  try {
    const newproduct = new Products_Model(data);
    await newproduct.save();

    return newproduct;
  } catch (err) {
    return {
      status: 0,
      message: err.toString(),
    };
  }
};

const Update = async (update, id) => {
  try {
    let result = await Products_Model.updateOne({ _id: id }, update);

    return result;
  } catch (err) {
    return {
      status: 0,
      message: err.toString(),
    };
  }
};

const Delete = async (id) => {
  try {
    let doc = await Products_Model.deleteOne({ _id: id });

    if (doc.n == 1) return true;
  } catch (err) {
    return {
      status: 0,
      message: err.toString(),
    };
  }
};

const Searchproducts = async (text) => {
  try {
    let result = await Products_Model.find({
      Name: { $regex: `${text}` },
    }).limit(5);

    if (result.length == 0) return { message: "Not found" };
    return result;
  } catch (err) {
    return {
      status: 0,
      message: err.toString(),
    };
  }
};

const Finproducts = async (name) => {
  try {
    const Find = await Products_Model.findOne(
      {
        Name: name,
      },
      function (err, doc) {}
    );
    if (!Find) {
      return false;
    }
    return Find;
  } catch (err) {
    return {
      status: 0,
      message: err.toString(),
    };
  }
};

const pageination = async (objquery) => {
  let page = objquery.page * 1 || 1;
  let perPage = 9;
  delete objquery["page"];

  let product = await Products_Model.find(objquery)

    .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
    .limit(perPage);

  let count = await Products_Model.find(objquery).countDocuments(); // đếm để tính có bao nhiêu trang

  let total = Math.ceil(count / perPage);

  return { product: product, totalpage: total, count };
};

module.exports = {
  Add,
  Finproducts,
  Update,
  pageination,
  Searchproducts,
  Delete,
};