import React, { useState } from "react";

import Home from "../Homepage/View/Home";

import Products from "../Productspage/View/Products";

import Carddetail from "../Carddetail/View/Carddetail";

import Account from "../Accountpage/View/Account";

import Checkout from "../Checkoutpage/View/Checkout";

import Profilepage from "../Profile/View/Profile";

import Blog from "../Blog/View/Blog";

import Post from "../Post/View/Post";

const Main = [
  {
    path: "/",
    exact: true,
    main: () => <Home></Home>,
  },

  {
    path: "/Products",
    exact: true,
    main: ({ location }) => <Products location={location}></Products>,
  },
  {
    path: "/Products/:name",
    exact: true,
    main: ({ match }) => <Carddetail match={match}></Carddetail>,
  },

  {
    path: "/Account",
    exact: true,
    main: () => <Account></Account>,
  },
  {
    path: "/Checkout",
    exact: true,
    main: () => <Checkout></Checkout>,
  },
  {
    path: "/Profile",
    exact: true,
    main: () => <Profilepage></Profilepage>,
  },
  {
    path: `/Blog`,
    exact: true,
    main: () => <Blog></Blog>,
  },
  {
    path: `/Blog/:postid`,
    exact: true,
    main: ({ match }) => <Post match={match}></Post>,
  },
];

// <Switch>

// <Route exact  path="/"   ><Home></Home></Route>
// <Route   path="/Products" ><Products match={match}></Products></Route>

// </Switch>

export default Main;
