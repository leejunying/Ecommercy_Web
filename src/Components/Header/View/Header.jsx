import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
 import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


import Button from "@material-ui/core/Button";

import { decreasecart, increasecart } from "../../../Redux";

import { useDispatch, useSelector } from "react-redux";
import { lightGreen } from "@material-ui/core/colors";
import Chatbox from "../../Chatbox/View/Chatbox"
import Mobile_menu from "./Mobile_Menu"
const Headerstyle = styled.div`
  .Header {
    height: 0.5%;
    padding-top: 2%;
    padding-bottom: 2%;
    width: 70%;
    margin: 0 15% 0 15%;
  }
  .flex {
    display: flex;
  }
  .jus-end {
    justify-content: flex-end;
  }
  .bd {
    border: 1px solid red;
  }
  .row {
    flex-direction: row;
  }
  .col {
    flex-direction: column;
  }
  .al-center {
    align-items: center;
  }
  .just-center {
    justify-content: center;
  }
  .sp-between {
    justify-content: space-between;
  }
  .sp-evenly {
    justify-content: space-evenly;
  }
  .Logo {
    max-width: 150px;
  }
  .Logo > img {
    width: 150px;
    vertical-align: middle;
    border-style: none;
  }
  .border {
    border: 1px solid red;
  }

  small {
    font-weight: unset;
    font-size: x-small;
  }
  .Menu {
    font-size: small;
    font-weight: normal;
  }
  .Menu > div {
    margin-right: 5px;
  }

  .under-menu {
    width: 0;
    border-radius: 20%;
    border-bottom: 3px solid black;

    transition: width 0.6s;
  }
  .top-label {
    color: #1349b2;

    position: absolute;
    top: -20px;
    left: -9px;
    height: 16px;
    padding: 4px 10px;
    font-size: 10px;
    line-height: 9px;
  }
  a {
    font-family: math;
    display: block;
    position: relative;
    cursor: pointer;
  }
  .amount {
    color: #f3f3f3;

    position: absolute;
    width: 22px;
    height: 22px;
    font-weight: 500;
    text-align: center;
    font-size: 28px;

    margin: -22px 0 0 5px;
  }
  .shop {
  }

  .shop:hover {
  }
  .shadowmenu {
    background-color: white;
    z-index: 100;
  }
  .shadow {
    width: 100%;
    position: absolute;
    opacity: 0;
  }
  ul {
  }

  li {
    list-style: none;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    font-style: match;
    width: 100%;
  }
  .fas {
    font-size: 14px;
    position: relative;
    cursor: pointer;
    color: #858484;
    right: 0;
    margin-right: 5%;
  }

  .fa-times {
    position: absolute;
    top: 2%;
    font-size: x-large;
    z-index: 2000;
  }
  .shadow-left {
    background-color: transparent;
    min-height: 290px;
    background-image: url("https://cdn.shopify.com/s/files/1/1521/5776/files/menu-bg-1_aa6281b8-da3e-4555-b894-c7488cebdb81.png?v=1600442862");
  }
  .shadow-right {
    background-color: transparent;
    min-height: 290px;

    background-image: url("https://cdn.shopify.com/s/files/1/1521/5776/files/menu-bg-2.png?v=1599808842");
  }
  .shadow-title {
    position: absolute;
    margin: 5% 0 0 2%;
    font-weight: 600;
    font-size: 12px;
    color: #808080;
  }
  .list {
    width: 280px;
    justify-content: space-evenly;
    display: flex;
  }

  a {
    text-decoration: none;
    color: black;
  }
  .MuiAppBar-colorPrimary {
    color: black;
    background: none;
    position: relative;
    display: none;
  }

  //Extention Cart
  .fa-window-close {
    font-size: x-large;
    cursor: pointer;
  }
  .Cart-extention {
    display: flex;
    justify-content: flex-end;
    top: 0;
    position: fixed;
    width: 0%;
    max-height: 100%;
    right: 0;
    z-index: 999;
    transition: width 1.2s;
  }
  .Cart-extention-show {
  }
  .Cart-btnshow {
    display: flex;
    width: 50px;
    height: auto;
    padding: 20px;
    justify-content: center;
    background-color: #333333;

    cursor: pointer;
  }
  .fa-shopping-cart {
    margin-top: 10px;
    font-size: 36px;
    color: #ffffff;
  }
  .fa-cart-arrow-down {
    color: #bbf383;
    margin-top: 10px;
    font-size: 36px;
  }
  .Cart-extention-box {
    display: flex;
    flex-direction: column;
    width: 100%;

    right: 0;
    top: 0;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      height: 30px;
    }
  }
  .head-items {
    width: 50px;
    color: #858484;
    cursor: pointer;
  }

  .head-items:hover {
    color: #e6dfdf;
  }
  .checkoutbtn {
    width: 100%;
    display: flex;
  }

  .Cart-title {
    background: #5f6062;
    color: white;
    padding: 20px;
   }
  .amount-cart {
    font-size: large;
  }
  .Cart-container {
    background-color: #5f6062;
    height: auto;
 
    padding: 2%;
  }
  .Cart-row {
   
    height: 135px;
    background-color: #fbfdfd;
  }
  .Search-container {
    border: none;
    outline-style: none;
    position: fixed;
    min-height: 25vh;
    max-height: auto;
    text-align: center;
     top: 10%;
    z-index: 2000;
    width: 50%;
    left:25%;
    background-color: #fcfcfc;
   }
   .Search-input{
     margin-top: 5%;
     color:black;
     padding:2%;
     border:1px solid #7c7a7a;
      left:20%;
      position: relative;
    }
   .Search-row{
     max-height: 50vh;
    
     overflow: auto;
      position: relative;
     left:20%;
     margin:0 0 1% 0;
   }

  .MuiInputBase-input {
    color: #474747;
    border: none;
  }

  .gradient-border {
    text-align: center;
    font-size: 22px;
    color: blue;
    font-weight: 500;
    position: relative;
    z-index: 0;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;

    &::before {
      content: "";
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #399953;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(#824a91, #833b97),
        linear-gradient(#a560b3, #9f3eb3), linear-gradient(#cf3a85, #e63e76),
        linear-gradient(#e05555, #e61f40);
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: #e4dede;
      border-radius: 5px;
    }

    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }
  }
  .cart-btn {
    border-radius: 30%;
    background-color: #dbd2d2;
    cursor: pointer;
    width: 24px;
    outline-style: none;
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    color: #ff0000;
    border: none;
  }
  .amount-control {
    width: 50%;
  }

  .Cart-row-img {
    object-fit: contain;
    max-width: 100px;
    max-height: 133px;
    margin-top: 5px;
  }


  .fa-comment-dots{
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    right: 0;
    bottom: 0;
    margin:0 10% 33% 20%;
    background-color: #e7eaec;
    color: rgb(20, 105, 233);
     z-index: 2999;
    position:fixed;
    font-size: 2.2rem;
    -webkit-animation: ring 4s .7s ease-in-out infinite;
  -webkit-transform-origin: 50% 4px;
  -moz-animation: ring 4s .7s ease-in-out infinite;
  -moz-transform-origin: 50% 4px;
  animation: ring 4s .7s ease-in-out infinite;
  transform-origin: 50% 4px;


}

@-webkit-keyframes ring {
  0% { -webkit-transform: rotateZ(0); }
  1% { -webkit-transform: rotateZ(30deg); }
  3% { -webkit-transform: rotateZ(-28deg); }
  5% { -webkit-transform: rotateZ(34deg); }
  7% { -webkit-transform: rotateZ(-32deg); }
  9% { -webkit-transform: rotateZ(30deg); }
  11% { -webkit-transform: rotateZ(-28deg); }
  13% { -webkit-transform: rotateZ(26deg); }
  15% { -webkit-transform: rotateZ(-24deg); }
  17% { -webkit-transform: rotateZ(22deg); }
  19% { -webkit-transform: rotateZ(-20deg); }
  21% { -webkit-transform: rotateZ(18deg); }
  23% { -webkit-transform: rotateZ(-16deg); }
  25% { -webkit-transform: rotateZ(14deg); }
  27% { -webkit-transform: rotateZ(-12deg); }
  29% { -webkit-transform: rotateZ(10deg); }
  31% { -webkit-transform: rotateZ(-8deg); }
  33% { -webkit-transform: rotateZ(6deg); }
  35% { -webkit-transform: rotateZ(-4deg); }
  37% { -webkit-transform: rotateZ(2deg); }
  39% { -webkit-transform: rotateZ(-1deg); }
  41% { -webkit-transform: rotateZ(1deg); }

  43% { -webkit-transform: rotateZ(0); }
  100% { -webkit-transform: rotateZ(0); }
}

@-moz-keyframes ring {
  0% { -moz-transform: rotate(0); }
  1% { -moz-transform: rotate(30deg); }
  3% { -moz-transform: rotate(-28deg); }
  5% { -moz-transform: rotate(34deg); }
  7% { -moz-transform: rotate(-32deg); }
  9% { -moz-transform: rotate(30deg); }
  11% { -moz-transform: rotate(-28deg); }
  13% { -moz-transform: rotate(26deg); }
  15% { -moz-transform: rotate(-24deg); }
  17% { -moz-transform: rotate(22deg); }
  19% { -moz-transform: rotate(-20deg); }
  21% { -moz-transform: rotate(18deg); }
  23% { -moz-transform: rotate(-16deg); }
  25% { -moz-transform: rotate(14deg); }
  27% { -moz-transform: rotate(-12deg); }
  29% { -moz-transform: rotate(10deg); }
  31% { -moz-transform: rotate(-8deg); }
  33% { -moz-transform: rotate(6deg); }
  35% { -moz-transform: rotate(-4deg); }
  37% { -moz-transform: rotate(2deg); }
  39% { -moz-transform: rotate(-1deg); }
  41% { -moz-transform: rotate(1deg); }

  43% { -moz-transform: rotate(0); }
  100% { -moz-transform: rotate(0); }
}

@keyframes ring {
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }

  43% { transform: rotate(0); }
  100% { transform: rotate(0); }
}
  //Reponsive

  @media screen and (max-width: 992px) {
    .Header {
      display: none;
    }
    .shadowmenu {
      display: none;
    }
    .MuiAppBar-colorPrimary {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    .Cart-extention {
      width: 100%;
    }
  }
`;
function Header() {
  //Calculate amount and update cart
  const dispatch = useDispatch();
  const [hidemenu, setHidemenu] = useState(false);

  const filtereState = useSelector((state) => state.cartReducer.items) || [];

  console.log(filtereState)


  const profile = useSelector((state) => state.tokenReducer.infodata) || [];

  const [checkout, setCheckout] = useState({

    disabled:true,
    text:"You need to login"


  });
   const token = useSelector((state) => state.tokenReducer.token);

  const [Cart, setCart] = useState(false);

  const [selectedmenu, setSelectedmenu] = useState(0);
  const [submenu, setSubmenu] = useState(false);

  const [showsearch, setShowsearch] = useState(0);

  const [searchvalue, setSearchvalue] = useState("");
  const [searchresult, setSearchresult] = useState([]);

  const decrease = (name, size) => {
    dispatch(decreasecart(name, size));
  };

  const increase = (name, size) => {
    dispatch(increasecart(name, size));
  };

  const showCart = () => {
    if (Cart == false) {
      setCart(true);
      document.querySelector(".Cart-extention").style.width = "30%";
    }
    if (Cart == true) {
      setCart(false);
      document.querySelector(".Cart-extention").style.width = "0%";
    }
  };

  const signout = () => {
    window.localStorage.clear();
    window.location.assign("/");
  };

  useEffect(() => {
    profile.length > 0 ? setCheckout({
      disabled:false,
        text:"CHECK OUT"

    })  : setCheckout({
      disabled:true,
      text:"You need to login"
    })
   }, []);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#9b9b9b",
      },
      secondary: {
        main: "#fafafa",
      },
    },
  });

  const Menu = [
    {
      name: "SHOP",
      to: "/Products",
      onhover: true,
      exact: true,
    },

    {
      name: "CATEGORIRES",
      to: "/Products",
      onhover: false,
      exact: true,
    },

    {
      name: "ABOUT US",
      to: "/Aboutus",
      onhover: false,
      exact: true,
    },
    {
      name: "CONTACT",
      to: "/Contact",
      onhover: false,
      exact: true,
    },
    {
      name: "BLOG",
      to: "/Blog",
      exact: true,
    },
  ];

  const Showshadow = (command) => {
    if (command != "off") {
      document.querySelector(".shadow").style.opacity = "1";
      document.querySelector(`#bd${command}`).style.width = "100%";
      setSelectedmenu(command);
    } else {
      document.querySelector(".shadow").style.opacity = "0";
      document.querySelector(`#bd${selectedmenu}`).style.width = "0";
    }
  };
  
  const  clearState=()=>{

    setShowsearch(0)
    setSearchresult([])


  }
  const Search = (search) => {
    axios
      .get(`http://localhost:4000/products/Search?input=${search}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setSearchresult(data);
      })

      .catch((error) => {
        console.error(error);
      });
  };

 

  // <span className="top-label" style={{ color: "red" }}>
  //               Hot
  //             </span>


  const Checkout=()=>{

    
    window.location.assign("/Checkout")

 

  }

  return (
    <Headerstyle>

       <Mobile_menu/>
        <Chatbox/>
        <i onClick={()=>{

          let show=  document.querySelector(".Chatbox").style

          show.opacity==0?show.opacity=1:show.opacity=0


          document.querySelector(".fa-comment-dots").style.display="none"



        }} className="flex jus-center  al-center far fa-comment-dots"> <label style={{fontSize:"x-small"}}>ADMIN</label></i>
      <Grid container md={12} className=" flex jus-center Header">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Link to="/">
            {" "}
            <Grid items={true} md={1}>
              <div style={{ cursor: "pointer" }} className="Logo">
                <img src="//cdn.shopify.com/s/files/1/1521/5776/t/90/assets/fastor4logo.png?v=10652948907752684887"></img>
              </div>
            </Grid>
          </Link>

          <Grid
            items={true}
            md={6}
            className="flex jus-center jus-sp-betwen al-center Menu"
          >
            {Menu.map((link, indx) => {
              return (
                <Grid className=" flex jus-center  " items={true} md={3}>
                  {" "}
                  <Link
                    onMouseEnter={() => {
                      Showshadow(indx);
                    }}
                    key={indx}
                    to={link.to}
                    exact={link.exact}
                    onMouseLeave={() => {
                      Showshadow("off");
                    }}
                  >
                    {link.name}
                    <Grid
                      id={`bd${indx}`}
                      key={indx}
                      className={`under-menu`}
                    ></Grid>
                  </Link>
                </Grid>
              );
            })}
          </Grid>

          <Grid container={true} md={4} className="  flex al-center  jus-start">
            <Grid
              onClick={() => setShowsearch(1)}
              items={true}
              md={2}
              className="flex col al-center head-items"
            >
              {" "}
              <i className="fas fa-search"></i>{" "}
              <small style={{ marginTop: "5px" }}>SEARCH</small>
            </Grid>
            <Grid
              items={true}
              md={2}
              className=" flex col al-center head-items"
            >
              {" "}
              <i className="fas fa-not-equal"> </i>
              <small style={{ marginTop: "5px" }}>COMPARE</small>
            </Grid>

            <Grid
              items={true}
              md={2}
              className="flex col jus-center al-center "
            >
              {" "}
              <NavLink
                className={"head-items"}
                to={profile.length > 0 ? `/Profile` : `/Account`}
              >
                <i className="flex jus-center fas fa-user"></i>
                <small style={{ marginTop: "5px" }}>ACCOUNT</small>
              </NavLink>
            </Grid>

            {profile.length > 0 ? (
              <Grid 
              onClick={() => signout()}
                items={true}
                md={2}
                className="flex col al-center jus-center head-items"
              >
                {" "}
                <i
                 
                  className="fas fa-sign-out-alt"
                ></i>
                <small>SIGN OUT</small>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    
      {showsearch==1?

        <Grid container={true} className="flex col jus-center Search-container">

            <Grid items={true} className="flex jus-end" ><i  onClick={()=>{

              clearState()


            }} className="fas fa-times"></i></Grid>
            <Grid md={8} items={true} className="flex Search-input">

            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                label="Search"
                id="mui-theme-provider-standard-input"
                onChange={(e) => setSearchvalue(e.target.value)}
              />
              
            <i
              onClick={() => Search(searchvalue)}
              style={{ fontSize: "22px", color: "#d8d7d7",border:"none" }}
              className="flex  jus-center al-center fas fa-search"
            ></i>
            </ThemeProvider>
            </Grid>
            <Grid items={true} md={8} className="felx jus-center Search-row">
              {searchresult.length>0?
               searchresult.map((data)=>{
                return <NavLink to={`/Products/${data.Name}`}> <Grid container={true} className=" flex jus-start ">

                  <Grid items={true} md={3}>
                  <img style={{width:"100%"}} src={data.Pic[0]}></img>
                  </Grid>
                  <Grid className="flex col jus-center al-center sp-evenly">
                  <label>Product name:{data.Name}</label>

                  <label>Make by:{data.Brand}</label>

                  <h4 style={{color:"#e72323ed"}}>Price:{data.Price}</h4>

                  </Grid>


               </Grid>

               </NavLink>
               }) : <p>Search result</p>



              }


            </Grid>

        </Grid>


      :null

      }



           
       
       

      <Grid className="Cart-extention">
        <Grid className="Cart-extention-show">
          <Grid
            className="Cart-btnshow"
            onClick={() => {
              showCart();
            }}
          >
            <span className="amount">{filtereState.length}</span>
            <i className="fas fa-shopping-cart"></i>
          </Grid>
        </Grid>
        <Grid className="flex col Cart-extention-box">
          <Grid className="flex sp-between al-center Cart-title">
            <h3>CART</h3>

            <label
              style={{ marginRight: "5%" }}
              className="amount-cart"
            ></label>
          </Grid>

          <Grid className="Cart-container ">
            {filtereState.length > 0 ? (
              filtereState.map((value, indx) => {
                return (
                  <Grid key={indx} container={true} className="felx Cart-row ">
                    <Grid items={true}>
                      <img src={value.img} className="Cart-row-img"></img>
                    </Grid>
                    <Grid
                      style={{ width: "50%", padding: "10px" }}
                      items={true}
                      className="flex col  "
                    >
                      <Grid
                        className="flex sp-between"
                        style={{ paddingBottom: "30px" }}
                      >
                        {" "}
                        <label>
                          {value.name.slice(0, value.name.indexOf("_"))}{" "}
                        </label>
                         <label> {value.name.slice( 1+value.name.indexOf("_"),value.name.length)}</label>
                      </Grid>

                      <Grid items={true}>
                        <Grid container className="flex jus-center sp-between ">
                          <Grid
                            items={true}
                            className="flex al-center amount-control sp-between"
                          >
                            <button
                              className="cart-btn"
                              onClick={() =>
                                decrease(value.name)
                              }
                            >
                              -
                            </button>

                            <label style={{ fontSize: "16px" }}>
                              {value.number}
                            </label>

                            <button
                              className="cart-btn"
                              onClick={() =>
                                increase(value.name)
                              }
                            >
                              +
                            </button>
                          </Grid>
                          <Grid items={true} className="cart-price">
                            <label>${value.price}</label>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })
            ) : (
              <Grid className="gradient-border">Cart is empty</Grid>
            )}

            {filtereState.length > 0 ? (
              <Grid style={{ background: "white" }} className="flex jus-center">
               
                  {" "}
                  <Button
                    onClick={()=>Checkout()}
                    className="checkoutbtn"
                    variant="outlined"
                    disabled={checkout.disabled}
                  >
                     {checkout.text}
                  </Button>{" "}
                
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>

      <Grid
        className="flex shadow"
        onMouseLeave={() => {
          Showshadow("off");
        }}
      >
        {selectedmenu == 0 ? (
          <Grid xs={12} className="flex shadowmenu">
            <Grid item={true} xs={2}></Grid>
            <Grid item={true} xs={5} className="flex shadow-left   ">
              <p className="shadow-title ">Men</p>
              <div className="list">
                <div>
                  <li>{"JACKETS & COATS"}</li>
                  <li>{"SUITS"}</li>
                  <li>{"JEANS"}</li>
                  <li>{"SWIMWEARS"}</li>
                  <li>{"LOUNGWEARS"}</li>
                  <li>{"T-SHRITS"}</li>
                </div>
                <div>
                  <li>{"POLO SHRITS"}</li>
                  <li>{"TRACKSUITS"}</li>
                  <li>{"SHIRTS"}</li>
                  <li>{"TROUSERS"}</li>
                  <li>{"SHORTS"}</li>
                  <li>{"UNDERWEAR"}</li>
                </div>
              </div>
            </Grid>

            <Grid container xs={7} className="flex shadow-right">
              <p className="shadow-title ">Woman</p>
              <div className="list">
                <div>
                  <li>{"JACKETS & COATS"}</li>
                  <li>{"SUITS"}</li>
                  <li>{"JEANS"}</li>
                  <li>{"SWIMWEARS"}</li>
                  <li>{"LOUNGWEARS"}</li>
                  <li>{"T-SHRITS"}</li>
                </div>
                <div>
                  <li>{"POLO SHRITS"}</li>
                  <li>{"TRACKSUITS"}</li>
                  <li>{"SHIRTS"}</li>
                  <li>{"TROUSERS"}</li>
                  <li>{"SHORTS"}</li>
                  <li>{"UNDERWEAR"}</li>
                </div>
              </div>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Headerstyle>
  );
}

export default Header;
