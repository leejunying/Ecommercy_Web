import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
  

import { decreasecart,increasecart,isadd } from "../../../Redux";

import {useDispatch, useSelector} from"react-redux"
 
 

const Headerstyle = styled.div`
  .Header {
    height: 0.5%;
    padding-top: 2%;
    padding-bottom: 2%;
    width: 70%;
    margin:0 15% 0 15%;
  }
  .flex {
    display: flex;
  }
  .jus-end {
    justify-content: flex-end;
  }
  .bd{
    border:1px solid red;
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
  .Menu{

    font-size: small;
    font-weight: normal;
    
  }
  .Menu>div{
    margin-right: 5px;
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
    font-size: 18px;
    position: relative;
    cursor: pointer;
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
  .Cart-extention{
    display: flex;
    justify-content: flex-end;
    top:0;
    position: fixed;
    width: 0%;
    max-height: 100%;
    right:0;
    z-index: 999;
    transition:  width 2s;
  }
  .Cart-extention-show{

   

  }
  .Cart-btnshow{
    display: flex;
    border:3px solid #d4d4f5;
    width: 50px;
    height: auto;
    padding:20px;
    justify-content: center;
    background-color: rgb(95, 96, 98);
  
    cursor:pointer;
   

  }
  .fa-cart-arrow-down{

    color:#bbf383;
    margin-top:10px;
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
   background:none;
}
::-webkit-scrollbar-thumb {
  background: #888; 
  height: 30px;
}


  
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
   
    
 
    padding: 3%;
  }
  .Cart-row {
    height: 135px;
    background-color: #fbfdfd;
  }


 
    .gradient-border {
      
   text-align: center;
      font-size: 22px;
      color:blue;
      font-weight: 500;
      position: relative;
	z-index: 0;
	width: 100%;
	height: 200px;
	border-radius: 10px;
	overflow: hidden;
	padding: 2rem;
	
	&::before {
		content: '';
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
		background-image: linear-gradient(#824a91, #833b97), linear-gradient(#a560b3, #9f3eb3), linear-gradient(#cf3a85, #e63e76), linear-gradient(#e05555, #e61f40);
		animation: rotate 4s linear infinite;
	}
	
	&::after {
		content: '';
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
    cursor:pointer;
    width: 24px;
    outline-style: none;
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    color: #ff0000;
    border:none;
  }
  .amount-control{

    width: 50%;
   

  }

  .Cart-row-img {
     object-fit: contain;
    max-width: 100px;
    max-height: 133px;
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
  const dispatch=useDispatch()
 
  const filtereState=useSelector(state=>state.cartReducer.items) || []

  const profile=useSelector(state=>state.tokenReducer.infodata)|| []

 
  const [checkout,setCheckout]=useState(false)

 
  const token=useSelector(state=>state.tokenReducer.token)
 
  const [Cart,setCart]=useState(false)
 
 
 
const decrease=(name,size)=>{


  
 
  dispatch(decreasecart(name,size))


}


const increase=(name,size)=>{


 

  dispatch(increasecart(name,size))

}
 
 const showCart=()=>{

  if(Cart==false)
  {
    setCart(true)
    document.querySelector(".Cart-extention").style.width="30%"
 

  }
  if(Cart==true)
  {
  setCart(false)
  document.querySelector(".Cart-extention").style.width="0%"
 }

}
 
useEffect(()=>{

  profile.length>0?setCheckout(true):setCheckout(false)



},[])
  

   
 




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
      name: "MEGAMENU",
      to: "/Megamenu",
      onhover: false,
      exact: true,
    },
    {
      name: "WOMAN",
      to: "/Produtcs/woman",
      onhover: false,
      exact: true,
    },
    {
      name: "MEN",
      to: "/Products/men",
      exact: true,
    },
  ];

  const Showshadow = (location, number) => {
    let shadowshop = document.querySelector(".shadow").style;

    if (location === 0) {
      if (number === 1) {
        shadowshop.opacity = "1";
      }
      if (number === 0) shadowshop.opacity = "0";
    }
    if (location === 1) {
      shadowshop.opacity = "0";
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  // <span className="top-label" style={{ color: "red" }}>
  //               Hot
  //             </span>

  return (
    <Headerstyle>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Grid items={true} xs={1}>
                <div style={{ cursor: "pointer" }} className="Logo">
                  <Link to="/">
                    {" "}
                    <img src="//cdn.shopify.com/s/files/1/1521/5776/t/90/assets/fastor4logo.png?v=10652948907752684887"></img>
                  </Link>
                </div>
              </Grid>
            </Typography>
            <Grid
              container
              xs={3}
              className="flex jus-center sp-between sp-evenly"
            >
              <i className="fas fa-search"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-cart-arrow-down"></i>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>

      <Grid container md={12} className=" flex jus-center Header">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid items={true}md={1}></Grid>
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
            className="flex jus-center jus-sp-betwen Menu"
          >
            {Menu.map((link, indx) => {
              return (
                <Grid className=" flex jus-center  "   items={true} md={3}   >
                  
                    {" "}
                    <Link
                    
                      onMouseEnter={() => {
                        Showshadow(indx, 1);
                      }}
                      key={indx}
                      to={link.to}
                      exact={link.exact}
                    >
                      {link.name}
                    </Link>
                  
                </Grid>
              );
            })}
          </Grid>

          <Grid container={true} md={3} className="flex sp-evenly">
            <Grid items={true} md={2}> <i className="fas fa-search"></i> </Grid>
            <Grid items={true} md={2}> <i className="fas fa-heart"></i></Grid>
          <NavLink to={'/Account'}  >
            <Grid  items={true} md={2} className="flex col al-center jus-center"> 
               <i className="fas fa-user"></i>
                 <small style={{marginTop:"5px"}} >{profile.length>0?profile[0].Email.slice(0,profile[0].Email.indexOf("@")):"Account"}</small>

            </Grid>
            </NavLink>
        
          </Grid>
        </Grid>

      
      </Grid>

         
          
          <Grid className="Cart-extention">
         <Grid className="Cart-extention-show">
           <Grid className="Cart-btnshow" onClick={()=>{

              showCart()

           }} >
             <span className="amount">{filtereState.length}</span>
              <i className="fas fa-cart-arrow-down"></i>
              </Grid>
         </Grid>
         <Grid className="flex col Cart-extention-box"  
 


         >

          
        
        <Grid className="flex sp-between al-center Cart-title">
         

          <h3>CART</h3>

          <label style={{ marginRight: "5%" }} className="amount-cart">
            
          </label>
        </Grid>

        <Grid className="Cart-container ">

        {filtereState.length>0?filtereState.map((value,indx)=>{



          return (


            <Grid key={indx} container className="felx Cart-row ">
            <Grid items={true}>
              <img
                src={value.img}
                className="Cart-row-img"
              ></img>
            </Grid>
            <Grid 
              style={{ width:"50%", padding: "10px" }}
              items={true}
              className="flex col  "
            > 
            <Grid className="flex sp-between" style={{ paddingBottom: "30px" }}>  <label >{ value.name.slice(0,value.name.indexOf("_"))} </label>{value.price.Name} <label></label></Grid>
            
              <Grid items={true}> 
              <Grid  container   className="flex jus-center sp-between ">
                <Grid items={true} className="flex al-center amount-control sp-between">
                <button className="cart-btn" 
                
                
                onClick={()=>decrease(value.name,value.price.Name)}>-</button>

                  <label style={{fontSize:"16px"}}>{value.amount}</label>

                  <button className="cart-btn" 
                  
                  onClick={()=>increase(value.name,value.price.Name)}
                  >+</button>
                </Grid>
                <Grid items={true} className="cart-price">

                    <label>${value.price.Price}</label>

                </Grid>

                <Button  variant="outlined" disable={checkout}   >CHECKOUT NOW</Button> 
                </Grid>
              </Grid>
            </Grid>

            <Grid items={true}></Grid>
          </Grid>



          )




        }):<Grid    className="gradient-border">

            


              Cart is empty 



       
          
          
          </Grid>} 



     
        </Grid>
        </Grid>
      </Grid>
    
      <Grid
        className="flex shadow"
        onMouseLeave={() => {
          Showshadow(0, 0);
        }}
      >
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
      </Grid>
    </Headerstyle>
  );
}

export default Header;
