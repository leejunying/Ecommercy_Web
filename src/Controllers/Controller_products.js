const { json } = require("body-parser");
const Products_Model = require("../Models/Products.js")




const Add = async (data) => {
    try {
        
   


       const newproduct = new Products_Model(data)
       await newproduct.save()


    } catch (err) {
      return {
        status: 0,
        message: err.toString(),
      };
    }
  };


  const Update = async (inputname,inputtype,update) => {
    try {
        
        
        const name={Name:inputname}
        const type={type:inputtype}
      

        if(name!="")
        { 
           
            let doc = await Products_Model.updateOne(name,update)

            let data= await Products_Model.findOne(name)
            return data
             
        }
        if(type!="")
        {

           let doc=await Products_Model.updateMany(type,update)
           let data= await Products_Model.find(type)

           return data


        }
        
       


    } catch (err) {
      return {
        status: 0,
        message: err.toString(),
      };
    }
  };



  const Delete = async (inputname,inputtype) =>{

try{
    const name={Name:inputname}
        const type={type:inputtype}
 

        if(name!="")
        { 
           
            let doc = await Products_Model.deleteOne(name)

          
            return true
             
        }
        if(type!="")
        {

           let doc=await Products_Model.deleteMany(type)
           let data= await Products_Model.find(type)

           return true


        }
      }
      catch (err) {
      return {
        status: 0,
        message: err.toString(),
      };
    }

  }




 

  const Finproducts=async(name) =>{

    try{

        const Find = await Products_Model.findOne(
            {
              Name: name,
            },
            function (err, doc) {}
          );
          if (!Find) {
            return false;
          }
          return  Find
          
    }
    catch(err)
    {
        return {

            status:0,
            message:err.toString(),
        }
    }

  }


  const pageination=async(objquery)=>{
  
 
    let page=objquery.page * 1||1
    let perPage=9
    delete objquery["page"]
 
    let product = await Products_Model.find(objquery)

    .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
    .limit(perPage)
    
    
    let count= await  Products_Model.find(objquery).countDocuments()// đếm để tính có bao nhiêu trang

       
    let total= Math.ceil(count/perPage)

 
    

     return {product:product,totalpage:total,count  }

  
  }
  

  module.exports = {
     Add,
     Finproducts,
     Update,
     pageination,
          };
  