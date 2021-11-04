const Blog_Model = require("../Models/Blog");
const Image_Model = require("../Models/Image");

const Createpost = async (data, displayimg) => {
  try {
    console.log(data);
    const newimage = await Image_Model.create({
      Data: displayimg,
    });
    if (newimage) {
      const newpost = await Blog_Model.create({
        Title: data.Title,
        Displayimage: newimage._id,
        Post_content: data.Content,
      });

      if (newpost) return true;
      else return false;
    }
  } catch (err) {
    return false;
  }
};

const Updatepost = async (data) => {
  try {
    let postid = data.post._id;

    let displayid = data.display._id;

    const updatepost = await Blog_Model.updateOne({ _id: postid }, data.post);
    const updatedisplay = await Image_Model.updateOne(
      { _id: displayid },
      data.display
    );
    if (updatepost.modifiedCount > 0 && updatedisplay.modifiedCount > 0) {
      return { status: 200, message: "Updated successfully" };
    }
  } catch (err) {
    return { status: 500, message: err.toString() };
  }
};

const Getpost = async (loadpage) => {
  try {
    let page = loadpage * 1 || 1;
    let posts = await Blog_Model.find()
      .populate("Displayimage")
      .skip(10 * page - 10)
      .limit(10);
    let total = await Blog_Model.find().countDocuments();

    let totalpage = Math.floor(total / 10);

    if (posts) return { status: 200, data: posts, totalpage: totalpage };
    else return { status: 404, message: "Data not found" };
  } catch (err) {
    return { status: 500, message: err.toString() };
  }
};

const Findpost = async (data) => {
  try {
    let post = await Blog_Model.find({ _id: data }).populate("Displayimage");

    if (post) return { status: 200, data: post };
    else return { status: 404, message: "Can't found data" };
  } catch (err) {
    return { status: 500, message: err.toString() };
  }
};

const Deletepost = async (data) => {
  try {
    let postid = data.post._id;

    let displayid = data.display._id;

    let post = await Blog_Model.deleteOne({ _id: postid });
    let display = await Image_Model.deleteOne({ _id: displayid });

    if (post.n == 1 && display.n == 1) {
      return { status: 200, message: "Deleted successfully" };
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  Createpost,
  Updatepost,
  Getpost,
  Findpost,
  Deletepost,
};
