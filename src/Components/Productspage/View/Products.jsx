import React from "react";

import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { useState, useEffect } from "react";

import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";

import "../CSS/Product.css";

import imageloading from "../Image/itachi-alt.png";

import { useHistory, useLocation } from "react-router-dom";

  
import MultipleCards from "../../Card/View/MutipleCards";

 
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { Search } from "@material-ui/icons";

const Productstyle = styled.div`
  .Product {
    width: 100%;
  }
  .Loading {
    width: 100%;
    background: #fff7f754;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .Roll {
    position: fixed;
    transition: opacity 250ms;
    animation: rotate-spinner 1s linear;
    animation-iteration-count: infinite;
  }

  @keyframes rotate-spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

let search=""
let selectedPrice=""
let selectedBrand=""
const Products = (props) => {
   //Config when page  frist load
   useEffect(() => {
    function handlerScreen() {
      if (test768.matches === true) {
      }
    }


    //Config when enter on URL

    
    let Colorstring = "Color="
    let Pricestring = "Price="
    let Brandstring ="Brand="
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  let Colorpg =urlParams.get("Color");
  let  Pricepg = urlParams.get("Price");
   let  Brandpg =  urlParams.get("Brand")
    
    console.log(Colorpg,Pricepg,Brandpg)

    if(Pricepg!=null)
    {
      let Priceupdate= price
      Priceupdate[`${Pricepg}`]=true
      setPrice(Priceupdate)

      Pricestring=Pricestring+Pricepg
  }
  else
    Pricestring=""
    if(Brandpg!=null)
    {
      let Brandupdate= brand
    
    
    Brandupdate[`${Brandpg}`]=true
    setBrand(Brandupdate)
    Brandstring=Brandstring+Brandpg
  }
  else 
  Brandstring=""
    
  if(Colorpg!=null)
  {



    let arrColor = Colorpg.split(" ")
    let Colorupdate=colorquery

    for(let value in Colorupdate)
    {
        if(arrColor.includes(value)==true)
        {
          Colorupdate[value]=1

          document.querySelector(`#${value}`).style.border = "2px solid red";
        }
    }
    
    setColorquery(Colorupdate)
   
    Colorstring=Colorstring+arrColor.join("+")
  }
  else
    Colorstring=""
  
 
  
 



    

    arrfilter.push(Colorstring, Pricestring, Brandstring);
    arrfilter = arrfilter.filter(function (str) {
      return /\S/.test(str);
    });
    if (arrfilter.length > 0) {

    search="?" + arrfilter.join("&")+"page="+1

    console.log(search)
    Get_filter_products(search,1)
    }
    else
     Get_products(1)
 
  
    Loading();
    const test768 = window.matchMedia("(max-width:768px)");
    test768.addEventListener("change", handlerScreen);
  }, []);
  let arrfilter = [];


  //Config link to filter
  const history = useHistory();
  const [searchlink, setSearchlink] = useState("");
  
       //Pagegination number
  
       const [pagenum, setPagenum] = useState(1);
       const handleChange = (event, value) => {
         setPagenum(value);

         if(search!="")
          Get_filter_products(search,value)
          else
            Get_products(value)
           
       };
     
       //Product and total page from server
       const [data, setData] = useState({
         product: [],
     
         totalpage: 0,
       });
     
  const pathname = window.location.pathname;

  //Control page load animation
  function Loading() {
    setTimeout(() => setLoading(0), 1500);
  }

 

  //Define State

  //Show loading
  const [loading, setLoading] = useState(1);

  //Color selected
  const [colorquery, setColorquery] = useState({
    black: 0,
    pink: 0,
    gray: 0,
    orange: 0,
    yellow: 0,
    white: 0,
    red:0,
  });

  const handleColor = (query) => {
    let color = colorquery;

    if (color[query] === 0) {
      color[query] = 1;
      setColorquery(color);
      Get_query();

      document.querySelector(`#${query}`).style.border = "2px solid red";
    } else {
      color[query] = 0;
      setColorquery(color);
      Get_query();

      document.querySelector(`#${query}`).style.border = "2px solid black";
    }
  };

  
 //Price selected

 const [price, setPrice] = useState({
  low: false,
  mid: false,
  high: false,
});
const { low, mid, high } = price;

const Displayelement = (select) => {
  if (select == "price") {
    for (let value in price) {
      if (price[value] === true) {
        return value;
      }
    }
  }

  if (select == "brand") {
    for (let value in brand) {
      if (brand[value] === true) {
        return value;
      }
    }
  }
};

const Displaylabel = (text) => {
  if (text == "low") return "Bellow $200";
  if (text == "mid") return "About $300 - $500";
  if (text == "high") return "Over $500";

  if (text == "Adi") return "ADIDAS";
  if (text == "Nik") return "NIKE";
  if (text == "Conver") return " CONVERSE";
  if (text == "Pu") return "PUMA";
  if (text == "Dc") return "DC";
};

const handleChange_Price = (event,value) => {
  setPrice({ ...price, [event.target.name]: event.target.checked });

  selectedPrice=value

  Get_query()
};

//Brand selected
const [brand, setBrand] = useState({
  Adi: false,
  Nik: false,
  Conver: false,
  Pu: false,
  Dc:false
});
const { Adi, Nik, Conver, Pu, Dc } = brand;

const handleChange_Brand = (event,value) => {
  setBrand({ ...brand, [event.target.name]: event.target.checked });
  selectedBrand=value
 
  Get_query()
 
};


  const Get_query = () => {
    //Change obj to array
    var result = Object.keys(colorquery).map((key) => [key, colorquery[key]]);

    var Color = result
      .filter((value) => {
        if (value[1] === 1) return value[0];
      })
      .map((value) => {
        return value[0];
      });
  
        

 

    let Colorquery="Color="+Color.join("+")
    if(Color.length==0)
    Colorquery=" "

    if(selectedPrice!="")
     var Pricequery="Price=" + selectedPrice
    else
      Pricequery=" "
    if(selectedBrand!="")
    var Brandquery="Brand=" + selectedBrand
    else
      Brandquery=" "


      
      
   
    

   


    arrfilter.push(Colorquery, Pricequery, Brandquery);
    arrfilter = arrfilter.filter(function (str) {
      return /\S/.test(str);
    });
    if (arrfilter.length > 0) {
      

      history.push(pathname + "?" + arrfilter.join("&"));

      search="?" + arrfilter.join("&")

      setSearchlink(pathname + "?" + arrfilter.join("&"))

      Get_filter_products(search,1)
     
    } else {
      history.replace("/Products");
      window.location.reload();
    }
 
  };

  const  Get_products=(value)=> {

    axios
      .get(`http://localhost:4000/products/${value}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setData(data);
         
      })
      .catch((error) => {
        console.error(error);
      });
     
  }



  const Get_filter_products=(search,value)=>{
    
    axios
    .get(`http://localhost:4000/products/Filter${search}&page=${value}`)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      
      let datavalue = data

     
     setData(datavalue)
    
       
    })
    
    .catch((error) => {
      console.error(error);
    });

  

 }

  return (
    <Productstyle>
      <Grid className={loading === 1 ? "Loading" : null}>
        {loading === 1 ? <Grid className="loader"></Grid> : null}
      </Grid>

      <Grid className="Product">
        <Grid container={true} className="flex State_bar" md={12}>
          <Grid items={true} md={1}>
         
          </Grid>
          <Grid items={true} md={3}>
            Home / Products
          </Grid>
        </Grid>
        <Grid conatiner md={12} className="flex Product-container">
          <Grid items={true} md={1}>
            {" "}
          </Grid>
          <Grid items={true} md={3} className=" flex col Left_sidebar">
            <Grid className="flex col Filter-box">
              <div>
                {" "}
                <h4>COLOR</h4>
              </div>

              <div className="flex jus-center sp-evenly color-row">
                <div
                  id="black"
                  style={{ background: "black" }}
                  onClick={() => {
                    handleColor("black");
                  }}
                  className="btn_color"
                ></div>

                <div
                  id="pink"
                  style={{ background: "pink" }}
                  onClick={() => {
                    handleColor("pink");
                  }}
                  className="btn_color"
                ></div>
                      <div
                  id="red"
                  style={{ background: "red" }}
                  onClick={() => {
                    handleColor("red");
                  }}
                  className="btn_color"
                ></div>
                  <div
                  id="white"
                  style={{ background: "white" }}
                  onClick={() => handleColor("white")}
                  className="btn_color"
                ></div>
                <div
                  id="yellow"
                  style={{ background: "yellow" }}
                  onClick={() => handleColor("yellow")}
                  className="btn_color"
                ></div>
                <div
                  id="gray"
                  style={{ background: "gray" }}
                  onClick={() => handleColor("gray")}
                  className="btn_color"
                ></div>
                <div
                  id="orange"
                  style={{ background: "orange" }}
                  onClick={() => handleColor("orange")}
                  className="btn_color"
                ></div>
              </div>
            </Grid>
            <Grid className="flex col Filter-box">
              <FormControl component="fieldset">
                <FormLabel component="legend">Price</FormLabel>

                {Object.values(price).indexOf(true) > -1 ? (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={price[Displayelement("price")]}
                          onChange={(event)=>handleChange_Price(event,"")}
                          name={Displayelement("price")}
                        />
                      }
                      label={Displaylabel(Displayelement("price"))}
                    />
                  </FormGroup>
                ) : (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={low}
                          onChange={(event)=>handleChange_Price(event,"low")}
                          name="low"
                        />
                      }
                      label="Bellow $200"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={mid}
                          onChange={(event)=>handleChange_Price(event,"mid")}
                          name="mid"
                        />
                      }
                      label="About $300-$500"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={high}
                          onChange={(event)=>handleChange_Price(event,"high")}
                          name="high"
                        />
                      }
                      label="Over $500"
                    />
                  </FormGroup>
                )}
              </FormControl>
            </Grid>
            <Grid className="flex col  Filter-box">
              <FormControl component="fieldset">
                <FormLabel component="legend">Brand</FormLabel>
                {Object.values(brand).indexOf(true) > -1 ? (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={brand[Displayelement("brand")]}
                          onChange={(event)=>handleChange_Brand(event,"")}
                          name={Displayelement("brand")}
                        />
                      }
                      label={Displaylabel(Displayelement("brand"))}
                    />
                  </FormGroup>
                ) : (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Adi}
                          onChange={(event)=>handleChange_Brand(event,"Adidas")}
                          name="Adi"
                        />
                      }
                      label="ADIDAS"
                    />
                  
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Pu}
                          onChange={(event)=>handleChange_Brand(event,"PUMA")}
                          name="Pu"
                        />
                      }
                      label="PUMA"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Conver}
                          onChange={(event)=>handleChange_Brand(event,"Converse")}
                          name="Conver"
                        />
                      }
                      label="CONVERSE"
                    />
                     <FormControlLabel
                      control={
                        <Checkbox
                          checked={Dc}
                          onChange={(event)=>handleChange_Brand(event,"DC")}
                          name="Dc"
                        />
                      }
                      label="DC"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Nik}
                          onChange={(event)=>handleChange_Brand(event,"NIKE")}
                          name="Nik"
                        />
                      }
                      label="NIKE"
                    />
                  </FormGroup>
                )}
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            items={true}
            md={6}
            className="flex col al-center jus-center Right_siderbar"
          > 



        <Grid>
        <Grid container={true} className=" flex  jus-start Product_container">
             
             {data.product.map((val, indx) => {
               return <MultipleCards {...val} key={indx}></MultipleCards>;
             })}
              
           </Grid>
           

           <Pagination className="flex just-end"
             count={data.totalpage}
             color="secondary"
             page={pagenum}
             onChange={handleChange}
           />
           </Grid>  


            
          </Grid>
        </Grid>
      </Grid>
    </Productstyle>
  );
};

export default Products;
