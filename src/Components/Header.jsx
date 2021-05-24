import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { useState } from "react";


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const Header = styled.div`
  .flex {
    display: flex;
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
  .jus-sp-betwen {
    justify-content: space-between;
  }
  .Logo {
    max-width: 150px;
  }
  .Logo > img {
    width: 150px;
    vertical-align: middle;
    border-style: none;
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

  .shop:hover {
  }
  .shadowmenu {
    background-color: white;
  }
  .shadow {
    position: relative;
    opacity: 0;
    z-index: 100;
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

    margin-top: 100px;
  }
`;
function Headerpage() {
  const Showshadow = (number) => {
    if (number === 1) {
      document.querySelector(".shadow").style.opacity = "1";
    } else document.querySelector(".shadow").style.opacity = "0";
  };

  return (
    <Header>
      <div
        style={{ display: "flex", padding: "2% 0% 0% 0", marginBottom: "0%" }}
      >
        <Grid container xs={2}></Grid>
        <Grid container xs={2} md={2}>
          <div className="Logo">
            <img src="//cdn.shopify.com/s/files/1/1521/5776/t/90/assets/fastor4logo.png?v=10652948907752684887"></img>
          </div>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid container xs={8} md={8} className="flex jus-sp-betwen">
            <a></a>

            <a
              className="shop"
              onMouseEnter={() => {
                Showshadow(1);
              }}
              onMouseLeave={() => {
                Showshadow(0);
              }}
            >
              <strong>
                <span>SHOP</span>
              </strong>{" "}
            </a>

            <a>
              {" "}
              <span>
                <strong>
                  <span className="top-label">New</span>
                  <span>CATEGORIRES</span>
                </strong>
              </span>
            </a>
            <a>
              {" "}
              <strong>
                <span>MEGAMENU</span>
              </strong>{" "}
            </a>
            <a>
              <strong>
                <span className="top-label" style={{ color: "red" }}>
                  Hot
                </span>
                <span>PAGES</span>
              </strong>
            </a>
            <a>
              <strong>
                <span>WOMEN</span>
              </strong>
            </a>
            <a>
              <strong>
                <span>MEN</span>
              </strong>{" "}
            </a>
          </Grid>

          <Grid container xs={2} md={2} className="flex jus-sp-betwen">
            <div></div>
            <i className="fas fa-search"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-user"></i>
            <i className="fas fa-cart-arrow-down"></i>
          </Grid>
        </Grid>

        <Grid xs={2}></Grid>
      </div>
      <Grid className="flex shadow">
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
    </Header>
  );
}

export default Headerpage;
