import React from "react";

 
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { useState, useEffect } from "react";

import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";

import "./Product.css";
 
import MultipleCards from "../../Components/MutipleCards";
import imageloading from "./itachi-alt.png";

 
import useLocation from 'react-router-dom'
 

import {
  BrowserRouter as Router,
  NavLink,
  Link,
  useParams,
} from "react-router-dom";

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

 

 




function Products_page() {
  
  let {Color} = useParams();
  //Control page load animation
  function Loading() {
    setTimeout(() => setLoading(0), 1500);
  }

  //Config when page  frist load
  useEffect(() => {
    function handlerScreen() {
      if (test768.matches === true) {
      }
    }
    Get_products(page);
    Loading();
    const test768 = window.matchMedia("(max-width:768px)");
    test768.addEventListener("change", handlerScreen);
  }, []);

  //Define State

  //Pagegination number
  const [pagenum, setPagenum] = useState(1);

  //Show loading
  const [loading, setLoading] = useState(1);
  //Product and total page from server
  const [page, setPage] = useState({
    product: [],

    totalpage: 0,
  });

  //Filter state

  const [query,setQuery]=useState("")

  const [cl_black, setCl_black] = useState("0");
  const [cl_pink, setCl_pink] = useState("0");
  const [cl_white, setCl_white] = useState("0");
  const [cl_yellow, setCl_yellow] = useState("0");
  const [cl_gray, setCl_gray] = useState("0");
  const [cl_orange, setCl_orange] = useState("0");

  const [price, setPrice] = useState([]);
  const [brand, setBrand] = useState([]);
 
  const handleChange = (event, value) => {
    setPagenum(value);
    Get_products(value);
  };

  const Changeborder = (color, num) => {
 


    if(num==1)
    document.querySelector(`#${color}`).style.border = "2px solid red"
    if(num==0)
    document.querySelector(`#${color}`).style.border = "2px solid black "
   
 
  };

  const handlecolor = () => {

    
    

  };



  const Get_filter=(query)=>{




  }

  function Get_products(page) {
    axios
      .get(`http://localhost:4000/products/${page}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setPage(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    
    <Productstyle>
      <Grid className={loading === 1 ? "Loading" : null}>
        {loading === 1 ? <img className="Roll" src={imageloading}></img> : null}
      </Grid>
    
      <Grid className="Product">
        <Grid container className="flex State_bar" md={12}>
          <Grid items={true} md={1}>
            {" "}
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
                <Link to="Products/black"><div
                  id="cl_black"
                  style={{ background: "black" }}
                  onClick={
                    cl_black == "0"
                      ? () => {
                        setCl_black("1");
                          Changeborder("cl_black", 1)
                          setTimeout(() =>  handlecolor("cl_black"), 1000);
                      
                          
                        }
                      : () => {
                        setCl_black("0");
                         Changeborder("cl_black", 0);
                        setTimeout(() =>  handlecolor("cl_black"), 1000);
                        }
                  }
                
                  className="btn_color"
                ></div>   </Link>
             <NavLink to="Products/pink">  <div
                  id="cl_pink"
                  style={{ background: "pink" }}
                  onClick={
                    cl_pink == "0"
                      ? () => {
                        setCl_pink("1")
                        Changeborder("cl_pink", 1);
                        setTimeout(() =>  handlecolor("cl_pink"), 1000);
                        }
                      : () => {
                        setCl_pink( "0")
                        Changeborder("cl_pink", 0);
                        setTimeout(() =>  handlecolor("cl_pink"), 1000);
                        }
                  }
                  className="btn_color"
                ></div>
                </NavLink>
                <div
                  id="cl_white"
                  style={{ background: "white" }}
                  onClick={
                    cl_white == "0"
                      ? () => {
                        setCl_white( "1")
                        Changeborder("cl_white", 1)
                        setTimeout(() =>  handlecolor("cl_white"), 1000);
                        }
                      : () => {
                        setCl_white( "0")
                        Changeborder("cl_white", 0)
                        setTimeout(() =>  handlecolor("cl_white"), 1000);
                        }
                  }
                  className="btn_color"
                ></div>
                <div
                  id="cl_yellow"
                  style={{ background: "yellow" }}
                  onClick={
                    cl_yellow == "0"
                      ? () => {
                        setCl_yellow( "1")
                        Changeborder("cl_yellow", 1)
                        setTimeout(() =>  handlecolor("cl_yellow"), 1000);
                        }
                      : () => {
                        setCl_yellow( "0")
                        Changeborder("cl_yellow", 0)
                        setTimeout(() =>  handlecolor("cl_yellow"), 1000);
                        }
                  }
                  className="btn_color"
                ></div>
                <div
                  id="cl_gray"
                  style={{ background: "gray" }}
                  onClick={
                    cl_gray == "0"
                      ? () => {
                        setCl_gray( "1")
                        Changeborder("cl_gray", 1)
                        setTimeout(() =>  handlecolor("cl_gray"), 1000);;
                        }
                      : () => {
                        setCl_gray( "0")
                        Changeborder("cl_gray", 0)
                        setTimeout(() =>  handlecolor("cl_gray"), 1000);;
                        }
                  }
                  className="btn_color"
                ></div>
                <div
                  id="cl_orange"
                  style={{ background: "orange" }}
                  onClick={
                    cl_orange == "0"
                      ? () => {
                        setCl_orange( "1")
                        Changeborder("cl_orange", 1)
                        setTimeout(() =>  handlecolor("cl_orange"), 1000);;
                        }
                      : () => {
                        setCl_orange( "0")
                        Changeborder("cl_orange", 0)
                        setTimeout(() =>  handlecolor("cl_orange"), 1000);;
                        }
                  }
                  className="btn_color"
                ></div>
              </div>
            </Grid>
            <Grid className="flex col Filter-box">
              <div>
                <h4>PRICE</h4>
              </div>
              <div className="flex al-center">
                {" "}
                <input
                  type="checkbox"
                  value="low"
                  className="btn_price"
                ></input>{" "}
                <label> BELLOW $200 </label>{" "}
              </div>
              <div className="flex al-center">
                {" "}
                <input
                  type="checkbox"
                  value="medium"
                  className="btn_price"
                ></input>{" "}
                <label> $300 - $500 </label>{" "}
              </div>
              <div className="flex al-center">
                {" "}
                <input
                  type="checkbox"
                  value="high"
                  className="btn_price"
                ></input>{" "}
                <label> ABOVE $500 </label>{" "}
              </div>
            </Grid>
            <Grid className="flex col  Filter-box">
              <div>
                <h4>BRAND</h4>
              </div>
              <div className="flex al-center">
                {" "}
                <input
                  type="checkbox"
                  value="DC"
                  className="btn_price"
                ></input>{" "}
                <label> DC </label>{" "}
              </div>
              <div className="flex al-center">
                {" "}
                <input
                  type="checkbox"
                  value="ADIDAS"
                  className="btn_price"
                ></input>{" "}
                <label> ADIDAS </label>{" "}
              </div>
              <div className="flex al-center">
                {" "}
                <input
                  type="checkbox"
                  value="PUMA"
                  className="btn_price"
                ></input>{" "}
                <label> PUMA </label>{" "}
              </div>
              <div className="flex al-center">
                {" "}
                <input
                  type="checkbox"
                  value="CONVERSE"
                  className="btn_price"
                ></input>{" "}
                <label>CONVERSE </label>{" "}
              </div>
              <div className="flex al-center">
                {" "}
                <input
                  type="checkbox"
                  value="NIKE"
                  className="btn_price"
                ></input>{" "}
                <label> NIKE </label>{" "}
              </div>
            </Grid>
          </Grid>

          <Grid
            items={true}
            md={6}
            className="flex col al-center jus-center Right_siderbar"
          > 

        
            <Grid container className=" flex  sp-evenly Product_container">
             
              {page.product.map((val, indx) => {
                return <MultipleCards {...val} key={indx}></MultipleCards>;
              })}
               
            </Grid>
            

            <Pagination
              count={page.totalpage}
              color="secondary"
              page={pagenum}
              onChange={handleChange}
            />
             
          </Grid>
        </Grid>
      </Grid>
   
 
    </Productstyle>
     
  );
}

export default Products_page;
