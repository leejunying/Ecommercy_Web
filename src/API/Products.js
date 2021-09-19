const express = require("express");
const router = express.Router();
const Products_Controller=require("../Controllers/Controller_products.js");
 const Products_Model = require("../Models/Products.js")
 
 
router.post("/add", async (req, res) => {
  try {

 
   let result= await Products_Controller.Add(req.body);


    res.send(result)

    
  } catch (err) {
    return {
      status: "Have error",
      message: err.toString(),
    };
  }
});


 
router.post("/update", async (req, res) => {
  try {
 
 
 const{objupdate,id}=req.body
    
    console.log(objupdate,id)

  let result = await Products_Controller.Update(objupdate,id);

    if(result!="")
    { 
      res.send(result )

    }


 
  } catch (err) {
    return {
      status: "Have error",
      message: err.toString(),
    };
  }
});




router.post("/delete", async (req, res) => {
  try {
 
 
 const{id}=req.body
    
 
  let result = await Products_Controller.Delete(id);

 
    res.send({


      message:result

    })

 
  } catch (err) {
    return {
      status: "Have error",
      message: err.toString(),
    };
  }
});



 router.get("/Filter",async  (req,res)=>{

 let objcolor={

  Color:[]

 }
 
 let objprice={

  

 }


 let objbrand={

  Brand:""

 }
 
 
 let page={page:req.query.page}

 
  

  if(req.query["Color"]!=undefined )
  {
     objcolor.Color={$in:req.query["Color"].split(" ")}
  
  }
  else{

    objcolor={}
  }
  if(req.query["Price"]!=undefined)
  {
     

      if(req.query["Price"]=='low')
      {
        objprice={"Price": { $lt: 200 }}
      }

      if(req.query["Price"]=='mid')
      {

        objprice={"Price": {$gte: 200, $lte: 500}}
        }

      if(req.query["Price"]=='high')
      {
        objprice={"Price":{$gt:500}}
      }
     

  
    
  }
  else
  {
    objprice={}
  }

  if(req.query["Brand"]!=undefined)
  {
     objbrand={"Brand":req.query["Brand"]}
  }
  else
  objbrand={}


 

  CorrectQuery={...objcolor,...objprice,...page,...objbrand}

 
   let result= await  Products_Controller.pageination(CorrectQuery)
  

    console.log(req.query,result)
   res.send(result)
 


 

 
 

 
 })

//Get products by Search

router.get("/Search",async (req,res)=>{

 
  const {input} =req.query
  console.log(input)

  let result = await Products_Controller.Searchproducts(input)
  res.send(result)


})



 //Get products by name 
 router.get("/Find/:name",async (req,res)=>{

  const {name}= req.params
  
 
  let result= await Products_Controller.Finproducts(name)

  res.send(result)

 })



 //Get pagination all products
router.get("/:page", (req, res) => {
  try {
    
    let perPage = 9; // số lượng sản phẩm xuất hiện trên 1 page
    let page = req.params.page || 1; 
  
    Products_Model
      .find() // find tất cả các data
      .sort( {'create_date': -1})
      .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
      .exec((err, products) => {
        
        Products_Model.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang

          let total= Math.ceil(count / perPage)
          if (err) return next(err);
           res.send({product:products,totalpage:total}) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...

           
        });
      });


  
  
 
  } catch (err) {
    return {
      status: "Have error",
      message: err.toString(),
    };
  }
});
 





 
module.exports = router;
