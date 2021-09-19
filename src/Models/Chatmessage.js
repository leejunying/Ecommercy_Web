const mongoose = require("mongoose");

const { Schema } = mongoose;

const Chatmessage_Model = new Schema(
  {
    
    create_date: {
      type: Date,
      default: Date.now,
    },

    Room:{
      type:String,
      require:true

  },

    User:{
        type:String,
        require:true,

    },
    
    Message:{
        type:String,
        require:true

    }


  },
  { collection: "Chatmessage" }
);

module.exports = mongoose.model("Chatmessage",Chatmessage_Model);
