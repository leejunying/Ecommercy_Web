const mongoose = require("mongoose");

const { Schema } = mongoose;

const Blog_Model = new Schema(
  {
    create_date: {
      type: Date,
      default: Date.now,
    },

    Title: {
      type: String,
      required: true,
    },
    Post_content: {
      type: String,
      require: true,
    },
    Displayimage: { type: Schema.Types.ObjectId, ref: "Image" },
  },
  { collection: "Blog" }
);

module.exports = mongoose.model("Blog", Blog_Model);
