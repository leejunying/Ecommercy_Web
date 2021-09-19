const mongoose = require("mongoose");

const { Schema } = mongoose;

const Account_Model = new Schema(
  {
    
    create_date: {
      type: Date,
      default: Date.now,
    },
    
    Firstname: {
        type: String,
        required: true,
    },
    Lastname: {
        type: String,
        require: true,
    },
    Email:{

    type:String,
    require :true,
      },

      Password:{
        type:String,
        require:true,
      },
    History:{
        
    type:Array,
    default:0,

    },

    Level:{
    type:String,
    require:true,

    },
    Lovelist:{
      type:Array,
      require:true,
    },
    Phone:{

      type:String,

    },
    Address:{

      type:String,

    },

  },
  { collection: "Account" }
);

module.exports = mongoose.model("Account", Account_Model);
