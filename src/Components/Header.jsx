import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { useState } from "react";

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

const Headerstyle = styled.div`
  .Header {
    height: 1%;
    padding-top: 2%;
  }
  .flex {
    display: flex;
  }
  .jus-end {
    justify-content: flex-end;
  }
  .row {
    flex-direction: row;
  }
  .col {
    flex-direction: column;
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
    font-size: 22px;
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
`;
function Header() {
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

  const Showshadow = (number) => {
    if (number === 1) {
      document.querySelector(".shadow").style.opacity = "1";
    }
    if (number === 0) document.querySelector(".shadow").style.opacity = "0";
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
    <Router>
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

        <Grid container className=" flex jus-center Header">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid items={true} xs={1}></Grid>
            <Link to="/">  <Grid items={true} xs={1}>
              <div
                style={{ cursor: "pointer" }}
               
                className="Logo"
              >
                <img src="//cdn.shopify.com/s/files/1/1521/5776/t/90/assets/fastor4logo.png?v=10652948907752684887"></img>
              </div>
          
            </Grid>
            </Link>
            <Grid items={true} xs={1}></Grid>
            <Grid
              items={true}
              md={5}
              className="flex jus-center jus-sp-betwen Menu"
            >

            

              {Menu.map((link, indx) => {
                return (
                  <Grid className="flex jus-center" items={true} xs={2}>
                    <strong>
                      {" "}
                      <Link key={indx} to={link.to} exact={link.exact}>
                        {link.name}
                      </Link>
                    </strong>
                  </Grid>
                );
              })}
            </Grid>

            <Grid
              items={true}
              xs={2}
              md={2}
              className="flex jus-sp-betwen Icon"
            >
              <div></div>
              <i className="fas fa-search"></i>
              <i className="fas fa-heart"></i>

              <i className="fas fa-user"></i>
              <i className="fas fa-cart-arrow-down"></i>
            </Grid>
          </Grid>

          <Grid items={true} xs={2}></Grid>
        </Grid>
        <Grid
          className="flex shadow"
          onMouseLeave={() => {
            Showshadow(0);
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
            <Grid container xs={1}></Grid>
          </Grid>
        </Grid>
      </Headerstyle>
    </Router>
  );
}

export default Header;
