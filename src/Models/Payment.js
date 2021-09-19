const mongoose = require("mongoose");

const { Schema } = mongoose;

const Payments_Model = new Schema(
  {
    
    create_date: {
      type: Date,
      default: Date.now,
    },
    
    Status: {
      type: String,
       require:true,
    
    },
 
    Email: {
        type: String,
        required: true,
    },
    Itemsdetail: {
        type: Array,
        require: true,
    },
    Items:{
      type:Array,
      require:true,

    },
    Amount:{

    type:String,
    require :true,
      }

  },
  { collection: "Payments" }
);

module.exports = mongoose.model("Payments", Payments_Model);
