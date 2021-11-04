const mongoose = require("mongoose");

const { Schema } = mongoose;

const Image_Model = new Schema(
  {
    create_date: {
      type: Date,
      default: Date.now,
    },

    Data: {
      type: String,
      required: true,
    },
  },
  { collection: "Image" }
);

module.exports = mongoose.model("Image", Image_Model);
