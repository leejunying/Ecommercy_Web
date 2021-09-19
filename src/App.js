import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { react } from "@babel/types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

import Topbar from "./Components/Topbar/Topbar.jsx";

import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { getdata } from "./Redux";

import { persistor, store } from "./Redux/store";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/lib/integration/react";

import Chatbox from "./pages/Chatbox/Chatbox";

function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  const [isLogin, setIslogin] = useState(true);
  const [account, setAccount] = useState({
    value: "",
    error: false,
    notice: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    notice: "",
  });

  const handleChange = (e, type) => {
    if (type == "acc")
      setAccount((prevState) => ({
        ...prevState,
        error: false,
        notice: "",
        value: e.target.value,
      }));

    if (type == "pass")
      setPassword((prevState) => ({
        ...prevState,
        error: false,
        notice: "",
        value: e.target.value,
      }));
  };

  const Login = (account, password) => {
    axios
      .post("http://localhost:4000/account/lovelist", {
        account: account,
        password: password,
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_Users = () => {};

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          {isLogin == false ? (
            <Grid container={true} md={12} className="flex jus-center Login">
              <Grid
                items={true}
                md={8}
                className=" flex  sp-between  container"
              >
                <Grid className="flex ">
                  <img src={"./login.jpg"}></img>
                  <Grid container={true} md={6} className="flex col form">
                    <img
                      style={{ width: "100%" }}
                      src={
                        "//cdn.shopify.com/s/files/1/1521/5776/t/90/assets/fastor4logo.png?v=10652948907752684887"
                      }
                    ></img>

                    <Grid
                      items={true}
                      className="flex col   sp-between login-input"
                    >
                      <TextField
                        label="Account"
                        onChange={(e) => handleChange(e, "acc")}
                      />
                      <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => handleChange(e, "pass")}
                      />
                      <Button size="large" variant="outlined" color="primary">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid className="Dashboard">
              <Router>
                <Topbar />
                <div className="container">
                  <Sidebar />
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/users">
                      <UserList />
                    </Route>
                    <Route exact path="/Chat">
                      <Chatbox />
                    </Route>
                    <Route
                      exact={false}
                      path="/user/:userId"
                      render={({ match }) => {
                        // Do whatever you want with the match...
                        return <User match={match} />;
                      }}
                    />

                    <Route path="/newUser">
                      <NewUser />
                    </Route>
                    <Route exact={true} path="/products">
                      <ProductList />
                    </Route>

                    <Route
                      exact={false}
                      path="/product/:productId"
                      render={({ match }) => {
                        // Do whatever you want with the match...
                        return <Product match={match} />;
                      }}
                    />

                    <Route path="/newproduct">
                      <NewProduct />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </Grid>
          )}
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
