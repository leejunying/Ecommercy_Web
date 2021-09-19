import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { saveinfo } from "../../../Redux";
import { Fragment, useEffect, useState } from "react";
import "../CSS/Profile.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { lovelist } from "../../../Redux";
import { useHistory, useLocation } from "react-router-dom";
import Contactform from "./Contactform";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import style from "styled-components";
import { useCallback } from "react";
import { addToCart ,unaddlovelist } from "../../../Redux";
const columns = [
  { id: "Id", label: "ID", minWidth: 20 },
  { id: "Items", label: "ITEMS", minWidth: 150 },
  { id: "Amount", label: "AMOUNT", minWidth: 100 },
  { id: "Date", label: "CREATE DATE", minWidth: 100 },
];

const columswish = [
  { id: "Iamge", label: "Image", minWidth: 100 },
  { id: "Unit", label: "Unit", minWidth: 100 },
  { id: "Price", label: "Price", minWidth: 100 },
  { id: "Action", label: "Action", minWidth: 150 },
];
const Profilepage = () => {

    const dispatch=useDispatch()
   const [loading, setLoading] = useState(1);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [isSave, setIssave] = useState(0);
  const profile = useSelector((state) => state.tokenReducer.infodata);
  const history = useSelector((state) => state.tokenReducer.history);

  const [extend, setExtend] = useState({
    his: false,
    wish: false,
    add: false,
  });
  const wishdata = useSelector((state) => state.tokenReducer.lovelist) || [];
  const oldlist = useSelector((state) => state.tokenReducer.oldlovelist) || [];

  const updatelovelist = (email, lovelist) => {
    axios
      .post("http://localhost:4000/account/updatelovelist", {
        email: email,
        lovelist: lovelist,
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const comparelovelist = (newlist) => {
    let result;

    for (let values of newlist)
      result = oldlist.filter((value) => value.Name != values);

    if (result != undefined) return true;

    return false;
  };

  function Loading() {
    setTimeout(() => setLoading(0), 1500);
  }

  useEffect(() => {
    Loading();

    let name = [];
    console.log(history,profile)
    wishdata.map((value) => name.push(value.Name));
    if (comparelovelist(name) == true) updatelovelist(profile[0].Email, name);
  }, []);

  let listtransaction = history;
  let transaction = 0;
  let percent = 0;
  if (listtransaction.length > 0) {
    listtransaction = listtransaction.map((data) => {
      return data.Amount;
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    transaction = listtransaction.reduce(reducer);

    percent = Math.round((transaction * 100) / 10000);
  }

  const Styles = style.div`
 
 
  .container {
  
    border-radius:10px;
    background:#ffffffff;
    padding: 20px 40px 40px 40px;
    
    z-index:999;
    margin:0 20% 0 20%;
      width:50%
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  .box-minmax{
   
    width: 100%;
    display: flex;
    justify-content: space-around;
 
    font-size: 20px;
    color: #FFFFFF;
    span:first-child{
      margin-left: 10px;
    }
  }
 
  .rs-range1 {
      margin-top: 30px;
      width: 100%;
      -webkit-appearance: none;
      &:focus {
          outline: none;
      }
      &::-webkit-slider-runnable-track {
          width: 100%;
          height: 10px;
          cursor: pointer;
          box-shadow: none;
          background:   linear-gradient(to right, #21e06a ${percent}%, #b9f2ff 100%);  
          border-radius: 10px;
          border: 0px solid #010101;
          
      }
   
      &::-moz-range-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #000000;
        background:   -moz-linear-gradient(to right,green 0%,yellow 40%, orange 60%,red 100%);  
        border-radius: 5px;
        border: 1px solid #000000;
      }
    
      &::-webkit-slider-thumb {
        box-shadow: none;
        border: 1px solid #f50b0b;
        box-shadow: 5px 10px 10px rgba(0,0,0,0.25);
        height: 25px;
        width: 50px;
         background:none;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top:-25px;
           
      }
      &::-webkit-slider-thumb{
         box-shadow: none;
        border: 1px solid #f50b0b;
        box-shadow: 5px 10px 10px rgba(0,0,0,0.25);
        height: 10px;
        width: 5px;
         background:#e90d61eb;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top:-0px;
           
      }
    &::-moz-range-thumb{
      box-shadow: none;
      border: 0px solid #ffffff;
      box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
      height: 33px;
      width: 21px;
      border-radius: 22px;
      background:orange;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -15px;
    }
    &::-moz-focus-outer {
      border: 0;
      }
  }
  

 
  
      
  }
 

`;

 
  const rotate = {
    transform: "rotate(180deg)",
    transition: "transform 1 ease-in-out", // smooth transition
  };
  const unrotate = {
    transform: "rotate(0deg)",
    transition: "transform 1s ease-in-out", // smooth transition
  };
  const show = {
    maxHeight: "100%",
  };
  const close = {
    maxHeight: "0",
  };

  const [showdetail, setShowdetail] = useState({
    history: { icon: unrotate, detail: close },
    wishlist: { icon: unrotate, detail: close },
    address: { icon: unrotate, detail: close },
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //Function//////////////////////////

  const handleClickshow = (name) => {
    switch (name) {
      case "add":
        if (extend.add == false) {
          setShowdetail((prevState) => ({
            ...prevState,
            address: { icon: rotate, detail: show },
          }));

          setExtend((prevState) => ({
            ...prevState,
            add: true,
          }));
        } else {
          setShowdetail((prevState) => ({
            ...prevState,
            address: { icon: unrotate, detail: close },
          }));

          setExtend((prevState) => ({
            ...prevState,
            add: false,
          }));
        }
        break;

      case "his":
        if (extend.his === false) {
          setShowdetail((prevState) => ({
            ...prevState,
            history: { icon: rotate, detail: show },
          }));
          setExtend((prevState) => ({
            ...prevState,
            his: true,
          }));
        } else {
          setShowdetail((prevState) => ({
            ...prevState,
            history: { icon: unrotate, detail: close },
          }));
          setExtend((prevState) => ({
            ...prevState,
            his: false,
          }));
        }
        break;

      case "wish":
        if (extend.wish === false) {
          setShowdetail((prevState) => ({
            ...prevState,
            wishlist: { icon: rotate, detail: show },
          }));

          setExtend((prevState) => ({
            ...prevState,
            wish: true,
          }));
        } else {
          setShowdetail((prevState) => ({
            ...prevState,
            wishlist: { icon: unrotate, detail: close },
          }));
          setExtend((prevState) => ({
            ...prevState,
            wish: false,
          }));
        }
        break;
    }
  };


  const AddtoCart=(data)=>{

    let objitems={

      name:data.Name+"_"+data.Size[0].Name,

      price:data.Size[0].Price,
      img: data.Pic[0],
      number:0,

    }

    dispatch(addToCart(objitems))

    console.log(data.Name,data.Size[0].Name,data.Size[0].Price)

      
  
   }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Fragment>
      <Styles>
        <Grid
           className="Profile"
        >
          {" "}
          <Grid className={loading === 1 ? "Loading" : null}>
            {loading === 1 ? <Grid className="loader"></Grid> : null}
          </Grid>
          {profile.length > 0 ? (
            <Grid container={true} className="flex jus-center">
              <Grid container={true} className="flex State_bar" md={12}>
                <Grid items={true} md={1}></Grid>
                <Grid items={true} md={3}>
                  Home / Profle /{profile[0].Email}
                </Grid>
              </Grid>

              <Grid
                container={true}
                md={12}
                className="flex jus-center Profile-container"
              >
                {isSave == 1 ? (
                  <Contactform
               
                    setIssave={setIssave}
              
              
                  ></Contactform>
                ) : null}

                <Grid md={4} className="flex col jus-center State-history">
                  <label>Member </label>

                  <div class="row-range">
                    <div className="flex sp-between  ">
                      <Grid className="flex col">
                        <label>Medal</label>
                        <i
                          style={{ color: " #AD8A56" }}
                          className="fas fa-medal"
                        ></i>
                      </Grid>
                      <Grid className="flex col">
                        <label>Sliver 5%</label>
                        <i
                          style={{ color: " #D7D7D7" }}
                          className="fas fa-medal"
                        ></i>
                      </Grid>
                      <Grid className="flex col">
                        <label>Gold 10%</label>
                        <i
                          style={{ color: "#AF9500" }}
                          className="fas fa-medal"
                        ></i>
                      </Grid>
                      <Grid className="flex col">
                        <label>Diamon 15%</label>
                        <i
                          style={{ color: "#b9f2ff" }}
                          className="fas fa-medal"
                        ></i>
                      </Grid>
                    </div>
                    <Grid className="slider-value">
                      <div
                        style={{ width: `${percent}%` }}
                        className="flex jus-end "
                      >
                        <span
                          style={{
                            margin: "10px 0 -20px 0",
                            color: "red",
                            border: "1px solid #e03838",
                            padding: "5px",
                          }}
                        >
                          {transaction}$
                        </span>
                      </div>
                      <input
                        className="rs-range1"
                        type="range"
                        min={0}
                        max={10000}
                        defaultValue={transaction}
                      ></input>
                    </Grid>

                    <div className="flex sp-between  ">
                      <label>0</label>
                      <label>500$</label>
                      <label>5000$</label>
                      <label>10000$</label>
                    </div>
                  </div>
                </Grid>

                

                <Grid md={8} className="flex col jus-center State-history">
                  <Grid
                    items={true}
                    className="flex sp-around  al-center jus-center address-extend"
                    md={2}
                    style={{
                      height: "25px",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    {" "}
                    <label>Contact </label>{" "}
                    <i className=" fas fa-address-book"></i>{" "}
                  </Grid>
                  <Grid
                    container={true}
                    md={8}
                    className="  flex  jus-center lovelist  "
                  >
                    <Grid
                      style={{ marginLeft: "5px" }}
                      items={true}
                      md={12}
                      className=" flex"
                    >
                      {" "}
                      <label>Address:</label>{" "}
                      <label style={{ marginLeft: "10px" }}>
                        { 
                           profile[0].Address.length>0?profile[0].Address:"Not contact"}
                          
                      </label>
                    </Grid>

                    <Grid
                      style={{ margin: "20px 0px 20px 5px" }}
                      items={true}
                      md={12}
                      className="flex "
                    >
                      {" "}
                      <label>Phone:</label>{" "}
                      <label style={{ marginLeft: "10px" }}>
                      { 
                           profile[0].Phone.length>0?profile[0].Phone:"Not contact"}
                      </label>
                    </Grid>

                    <Grid md={12} className="flex ">
                      <button
                        onClick={() => setIssave(1)}
                        style={{
                          backgroundColor: "Green",
                          color: "White",
                          fontSize: "14px",
                          padding: "5px",
                          outlineStyle: "none",
                          cursor: "pointer",
                        }}
                      >
                        Change
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid md={8} className="flex col jus-center State-history">
                  <Grid
                    className="flex sp-around al-center his-extend"
                    md={2}
                    style={{
                      height: "25px",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    {" "}
                    <label>History</label>{" "}
                    <i
                      style={showdetail.history.icon}
                      onClick={() => {
                        handleClickshow("his");
                      }}
                      className=" fas fa-angle-up"
                    ></i>{" "}
                  </Grid>
                  <Grid
                    container={true}
                    md={8}
                    className="flex col jus-center lovelist"
                  >
                    <Grid container={true} md={12} className="flex col ">
                      <Paper
                        style={showdetail.history.detail}
                        className="flex jus-center col al-center History"
                      >
                        <TableContainer className="flex  ">
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                             
                              {   
                                
                                 history

                                    .slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row, indx) => {
                                    
                                      return (
                                        <TableRow 

                                        
                                          hover
                                          role="checkbox"
                                           key={indx}
                                        >
                                          <TableCell>
                                            <label>{row.Id}</label>{" "}
                                          </TableCell>
                                          <TableCell>
                                            <label>{row.Items}</label>{" "}
                                          </TableCell>
                                          <TableCell>
                                            {" "}
                                            <label>{row.Amount}</label>{" "}
                                          </TableCell>
                                          <TableCell>
                                            {" "}
                                            <label>{row.Date}</label>{" "}
                                          </TableCell>
                                        </TableRow>
                                      );
                                    })
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[5, 10]}
                          component="div"
                          count={history.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid md={8} className="flex col jus-center State-history">
                  <Grid
                    items={true}
                    className="flex sp-around  al-center jus-center love-extend"
                    md={2}
                    style={{
                      height: "25px",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    {" "}
                    <label>Wishlist </label>{" "}
                    <i
                      onClick={() => {
                        handleClickshow("wish");
                      }}
                      style={showdetail.wishlist.icon}
                      className=" fas fa-angle-up"
                    ></i>{" "}
                  </Grid>
                  <Grid
                    container={true}
                    md={8}
                    className="flex col jus-center lovelist"
                  >
                    <Grid container={true} md={12} className="flex col ">
                      <Paper
                        style={showdetail.wishlist.detail}
                        className="flex jus-center col al-center Wishlist"
                      >
                        <TableContainer className="flex  ">
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columswish.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {wishdata.length > 0
                                ? wishdata
                                    .slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row, indx) => {
                                      return (
                                        <TableRow
                                          hover
                                          role="checkbox"
                                          tabIndex={-1}
                                          key={row.id}
                                        >
                                          <TableCell>
                                            <img
                                              style={{ width: "115px" }}
                                              src={row.Pic[0]}
                                            ></img>
                                          </TableCell>
                                          <TableCell>
                                            <label>{row.Name}</label>{" "}
                                          </TableCell>
                                          <TableCell>
                                            {" "}
                                            <label>{row.Price}</label>{" "}
                                          </TableCell>
                                          <TableCell>
                                            <Grid
                                              style={{
                                                width: "50px",
                                                height: "70px",
                                                fontSize: "large",
                                              }}
                                              className=" flex col  jus-start sp-evenly  "
                                            >
                                              {" "}
                                              <i  
                                                onClick={()=>AddtoCart(row)}
                                                style={{ textAlign: "center" }}
                                                className="fas fa-shopping-cart"
                                              ></i>
                                              <i  

                                                onClick={()=>dispatch(unaddlovelist(row.Name))}
                                                style={{ textAlign: "center" }}
                                                className="fas fa-trash"
                                              ></i>
                                            </Grid>
                                          </TableCell>
                                        </TableRow>
                                      );
                                    })
                                : null}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[5, 10]}
                          component="div"
                          count={wishdata.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid
              style={{ height: "500px" }}
              className="flex jus-center al-center"
            >
              You must login to see your profile
            </Grid>
          )}
        </Grid>
      </Styles>
    </Fragment>
  );
};
export default Profilepage;
