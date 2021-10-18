const Blog_Model = require("../Models/Blog");
const Image_Model = require("../Models/Image");

const Createpost = async (data, displayimg) => {
  try {
    const newpost = await Blog_Model.create({
      Title: data.Title,
      Title_img: data.Title_img,
      Post_content: data.Content,
    });

    if (newpost) {
      console.log(typeof newpost._id);

      const uploadimg = new Image_Model({
        Data: displayimg,
        post: newpost._id,
      });
      let img = await uploadimg.save();

      if (img) return true;
      else return false;
    } else return false;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  Createpost,
};
