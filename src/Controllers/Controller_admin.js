const Products_Model=require("../Models/Products")
const Payments_Model=require("../Models/Payment")
const Users_Model=require("../Models/Account")





const Getdata=async ()=>{


    let products =   await  Products_Model.find().sort( {'create_date': -1})
  
    let users= await Users_Model.find().sort( {'create_date': -1})

    let payments= await Payments_Model.find().sort( {'create_date': -1})




    return [products,users,payments]
  
  



}
 
 









module.exports = {
   Getdata,
  };
  