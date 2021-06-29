const mongoose = require("mongoose");

const { Schema } = mongoose;

const Products_Model = new Schema(
  {
    
    create_date: {
      type: Date,
      default: Date.now,
    },
    
    Status: {
      type: String,
       require:true,
    
    },
 
    Name: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        require: true,
    },
    Brand:{

    type:String,
    require :true,
      },

      Describe:{
        type:String,
        require:true,
      },
    Discount:{
        
    type:Number,
    default:0,

    },

    Color:{
    type:Array,
    require:true,

    },
    
    Price:{
      type:Number,
      requrie:true,

    },
     
    Size:{

        type:Array,
        require:true,

    },
    Pic: {
      type: Array,
      required: true,
    },
   
   
  
  },
  { collection: "Products" }
);

module.exports = mongoose.model("Products", Products_Model);
