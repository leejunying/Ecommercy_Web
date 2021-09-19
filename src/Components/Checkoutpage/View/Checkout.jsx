import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import "../CSS/Checkout.css";

import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import { countries } from "../countries ";


import { payment,trashitems } from "../../../Redux";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Paypal from "../../Paypal"
const columns = [
  { id: "items", label: "ITEMS", minWidth: 120 },
  { id: "name", label: "NAME", minWidth: 100 },
  { id: "size", label: "SIZE", minWidth: 100 },
  { id: "number", label: "NUMBER", minWidth: 100 },
  { id: "price", label: "PRICE", minWidth: 100 },
  {id:"remove",label:"TRASH",minWidth:50}
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "70%",
    position:"relative"
  },
});

const Checkout = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.cartReducer.items) || [];
  const info = useSelector((state) => state.tokenReducer.infodata) || [];
  
  let a=[]
  let items=[]
  for(let value of rows) 
  {

 
 a.push(value.price*value.number)

 
 items.push(`${value.name}_(X${value.number})_price:${value.price}`)
 
  }

  a= a .reduce((a, b) => a + b, 0)
  if(info.Status=='Sliver')
    a= Math.round(a-(a*5/100))
  if(info.Status=='Gold')
    a=Math.round(a-(a*10/100))
  if(info.Status=='Diamon')
    a=Math.round(a-a(a*15/100))
  
  const history = useHistory();

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [step, setStep] = useState("0");

  const [firstname, setFirstname] = useState({
    value: info[0].Firstname,
    error: false,
    notice: "",
  });
  const [lastname, setLastname] = useState({
    value: info[0].Lastname,
    error: false,
    notice: "",
  });
  const [address, setAddress] = useState({
    value: info[0].Address,
    error: false,
    notice: "",
  });
  const [city, setCity] = useState({
    value: "",
    error: false,
    notice: "",
  });
  const [country, setCountry] = useState({
    value: "",
    error: false,
    notice: "",
    code:""
  });

  const [postal, setPostal] = useState({
    value: "",
    error: false,
    notice: "",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (e, type) => {
    if (type == "first") {
      setFirstname((prevState) => ({
        ...prevState,
        error: false,
        notice: "",
        value: e.target.value,
      }));
    }

    if (type == "last") {
      setLastname((prevState) => ({
        ...prevState,
        error: false,
        notice: "",
        value: e.target.value,
      }));
    }

    if (type == "add") {
      setAddress((prevState) => ({
        ...prevState,
        error: false,
        notice: "",
        value: e.target.value,
      }));
    }

    if (type == "city") {
      setCity((prevState) => ({
        ...prevState,
        error: false,
        notice: "",
        value: e.target.value,
      }));
    }

    

    if (type == "postal") {
      setPostal((prevState) => ({
        ...prevState,
        error: false,
        notice: "",
        value: e.target.value,
      }));
    }
  };

 

  const validate = () => {
    let errfirst = { error: false, notice: "" };
    let errlast = { error: false, notice: "" };
    let erradd = { error: false, notice: "" };
    let errcity = { error: false, notice: "" };
    let errcountry = { error: false, notice: "" };
    let errpostal={error:false,notice:" "};

    if (firstname.value.length == 0)
      errfirst = { error: true, notice: "Frist name is empty" };
    if (lastname.value.length == 0)
      errlast = { error: true, notice: "Last name is empty" };
    if (address.value.length == 0)
      erradd = { error: true, notice: "Address name is empty" };
    if (city.value.length == 0)
      errcity = { error: true, notice: "City name is empty" };
    if (country.value.length == 0)
        errcountry = { error: true, notice: "Country name is empty" };
    if (postal.value.length == 0)
      errpostal = { error: true, notice: "Postal code name is empty" };

    return {
      errfirst: errfirst,
      errlast: errlast,
      erradd: erradd,
      errcity: errcity,
      errcountry: errcountry,
      errpostal: errpostal,
    };
  };

  const handleNext = () => {
    let error = validate()||[];

    setFirstname({ ...firstname, ...error.errfirst });
    setLastname({ ...lastname, ...error.errlast });
    setAddress({ ...address, ...error.erradd });
    setCity({ ...city, ...error.errcity });
    setCountry({ ...country, ...error.errcountry });
    setPostal({ ...postal, ...error.errpostal });


    
     
  

      if(country.error==false &&
        lastname.error==false &&
        firstname.error==false &&
        city.error==false &&
        country.error==false &&
        postal.error==false 
      
        
        )
        {

          document.querySelector("#ship").style.color = "black";
      document.querySelector("#pay").style.color = "blue";

      setStep("1");

      let d = new Date();  // i assume your date as 01-11-1933
      d.getDate(); // 11
      d.getMonth(); // 0  month is like array so you have to do +1 for correct month
      d.getFullYear(); // 1933
       
 
      let countrycode=countries.filter(value=> {if(value.label.includes(country.value.trim())==true)
        
      return value.code
      } )
        

     

      let ship= {
          name:{

            full_name:`${firstname.value}  ${lastname.value}`
          },
          address: {
            address_line_1: address.value,
            address_line_2: " ",
            admin_area_2: city.value,
            admin_area_1: " ",
            postal_code:  postal.value,
            country_code: `${countrycode[0].code}`

      }
    }

      
    
    console.log(items,a,ship)

      
      dispatch(payment(items,a,ship))
          


        }
    

      
 
  };
 

  const handleBack=()=>{

    setStep("0")
    document.querySelector("#ship").style.color = "blue";
    document.querySelector("#pay").style.color = "black";
  }

  return (
    <Fragment>
      <Paper className="flex jus-center col al-center">
        <Grid container={true} className="flex State_bar" md={12}>
          <Grid items={true} md={1}></Grid>
          <Grid items={true} md={3}>
            Home / Checkout
          </Grid>
        </Grid>

        <TableContainer className={classes.container}>
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,indx) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell>
                        <img style={{ height: "80px" }} src={row.img}></img>{" "}
                      </TableCell>
                      <TableCell>
                        <label>
                          {row.name.slice(0, row.name.indexOf("_"))}
                        </label>{" "}
                      </TableCell>
                      <TableCell>
                        {" "}
                        <label>{row.price}</label>{" "}
                      </TableCell>
                      <TableCell>
                        {" "}
                        <label>{row.number}</label>{" "}
                      </TableCell>
                      <TableCell>
                        {" "}
                        <label>${row.number * row.price}</label>{" "}
                      </TableCell>
                      <TableCell>
                        {" "}
                        <i className="fas fa-trash"   onClick={()=>   dispatch(trashitems(indx))}></i>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      <Grid className="flex   jus-center Steptopayment">
        <Grid className="flex col  Stepcontainer">
          <Grid className="flex al-center Stephead">
            <li id={"ship"}>Shipping</li>
            <li>
              {" "}
              <i class="fas fa-long-arrow-alt-right"></i>{" "}
            </li>
            <li id={"pay"}>Payment</li>
          </Grid>
          <Grid className="Stepbody">
            {step == "0" ? (
              <Grid className="step-info">
                <li>
                  <h3>Contact information</h3>
                </li>
                <li>
                  {" "}
                  Name:<span>{info[0].Lastname}</span>{" "}
                  <span>{info[0].Firstname}</span>
                </li>
                <li> Email: {info[0].Email} </li>

                <li> Phone: {info[0].Phone} </li>

              

                <li>
                  <h3>Shipping address</h3>
                </li>
                
 

                <from className="flex col">
                  <Grid className="flex sp-between">
                    {" "}
                    <TextField
                      id="standard-basic"
                      autoFocus
                      required
                      label="First name"
                      error={firstname.error}
                      helperText={firstname.notice}
                      onChange={(e) => handleChange(e, "first")}
                      value={firstname.value}
                     
                    />{" "}
                    <TextField
                      id="standard-basic"
                      autoFocus
                      required
                      label="Last name"
                      error={lastname.error}
                      helperText={lastname.notice}
                      onChange={(e) => handleChange(e, "last")}
                      value={lastname.value}
                      defaultValue={info[0].Lastname}
                    />
                  </Grid>
                  <TextField
                    id="standard-basic"
                    autoFocus
                    required
                    label="Address"
                    error={address.error}
                    helperText={address.notice}
                    onChange={(e) => handleChange(e, "add")}
                    value={address.value}
                    defaultValue={info[0].Address}
                  />

                  <TextField
                    id="standard-basic"
                    autoFocus
                    required
                    label="City,state,province"
                    error={city.error}
                    helperText={city.notice}
                    onChange={(e) => handleChange(e, "city")}
                    value={city.value}
                  />

                  <Grid
                    style={{ marginTop: "15px" }}
                    className="flex sp-between"
                  >
                    <Autocomplete
                    onChange={(e, value) =>  setCountry((prevState) => ({
                      ...prevState,
                      value: value.label,
                    })) }
                    error={country.error}
                    helperText={country.notice}
                      id="combo-box-demo"
                      options={countries}
                      getOptionLabel={(option) => option.label}
                      style={{ width: 250 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country/Region"
                          variant="outlined"
                       
                       
                        
                    
                        />
                      )}
                    />

                    <TextField
                      id="standard-basic"
                      autoFocus
                      required
                      label="Postal code"
                      onChange={(e) => handleChange(e, "postal")}
                      error={postal.error}
                      helperText={postal.notice}
                      value={postal.value}
                    />
                  </Grid>
                </from>
              </Grid>
            ) : step == "1" ? (
              <Grid>
                  <Paypal/>

              </Grid>
            ) : null}
            <Grid style={{ marginTop: "15px" }} className="flex sp-evenly">
              <Button color="secondary" onClick={() => handleNext()}>
                Next{" "}
              </Button>
              <Button color="primary" onClick={()=>handleBack()}>Back</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Checkout;
