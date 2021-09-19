import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
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

const Mobile_menu = () => {
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
  return (
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
            <i className="fas fa-not-equal"></i>
            <i className="fa-shopping-cart"></i>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Mobile_menu;
