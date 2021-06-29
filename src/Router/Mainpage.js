import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

import Home from "../Pages/Home/Home.jsx";
import Notfound from '../Components/Notfoundpage'
import Login from "../Pages/login/Login.js";
 
import Products_page from "../Pages/Products/Product.jsx";
 

 
import Header from "../Components/Header"
import Footer from "../Components/Footer"

function Routers() {
 
    return (



   
       
        <Switch>
        
        <Route exact  path="/"   ><Home></Home></Route>
        <Route  exact path="/Products" ><Products_page></Products_page></Route>
        <Route exact path="*"  ><Notfound></Notfound></Route>
       
        </Switch>



         
      
      


    );
}

export default Routers;