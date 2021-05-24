import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from "../Pages/Home/Home.jsx";
import MultipleCards from"../Components/MutipleCards.jsx"
import Login from "../Pages/login/Login.js";
import Headerpage from "../Components/Header.jsx";
import Footerpage from "../Components/Footer.jsx"


function Routers() {
  const [isLogin, setIsLogin] = useState(true);


  //if(has token redirect main)
  return (
    <Router>
      <Switch>
      
        <Route path="/login">
          <Login></Login>
        </Route>
        {isLogin ? (
          <Route path="/">
            <Headerpage></Headerpage>
            <Home></Home>
            <Footerpage></Footerpage>

            
          </Route>
        ) : (
          <Redirect to="/login" />
        )}
           
          
      </Switch>
    </Router>
  );
}

export default Routers;
