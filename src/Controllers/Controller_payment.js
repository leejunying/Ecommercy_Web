const { json } = require("body-parser");
const Payments_Model = require("../Models/Payment")



const Addpayments=async(Email,Items,Amount,Itemsdetail)=>{

    try {

        
        const newpayment = new Payments_Model(
            {

                Email:Email,
                Items:Items,
                Itemsdetail:Itemsdetail,
                Amount:Amount

            }
        )
        const result=    await newpayment.save()

        if(!result)
        return false

         return true
       
      } catch (err) {
        return {

          message: err.toString(),
        };
      }
  }
  




  
  module.exports = {
    Addpayments
    
  };
  