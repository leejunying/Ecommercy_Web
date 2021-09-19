import React from "react";
import "./productList.css";
 import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
 import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from 'axios'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import SettingsIcon from "@material-ui/icons/Settings";

import { deleteproduct,searchproduct } from "../../Redux";
const columns = [
  { id: "name", label: "NAME", minWidth: "5%" },
  { id: "img", label: "IMAGES", minWidth: "10%" },
  { id: "status", label: "STATUS", minWidth: "5%" },
  { id: "discout", label: "Discount", minWidth: "5%" },
  { id: "Size", label: "SIZE", minWidth: "30%" },
  { id: "Stock", label: "STOCK", minWidth: "5%" },
  { id: "action", label: "ACTION", minWidth: "10%" },
];

export default function ProductList() {
 const products = useSelector((state) => state.products);

 const [data,setData]=useState(products)

   const dispatch = useDispatch()
 
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

   const [pagenum, setPagenum] = useState(1);

  const [showpop,setShowpop]= useState({

    value:0,
    notice:"",

  })

  const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
  });
  const classes = useStyles();


  const handleSearch=(e)=>{

    let searchdata=data


  searchdata=searchdata.filter(value=>value.Name.includes(e.target.value))


  setData(searchdata)

    if(e.target.value=="")
    setData(products)


  } 
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (indx) => {
  
 
    axios
    .post("http://localhost:4000/products/delete", {
      id:products[indx]._id


    })
    .then((res) => {
      return res.data;
    })
    .then((data) => { 
      
      
      if(data.message==true)
      dispatch(deleteproduct(indx))
      

     })
    .catch((error) => {
      console.error(error);
    });


  };

  return (
    <div className="productList">

 

      <Grid container={true} md={9} className="flex jus-end ">
        {" "}

        
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </Grid>

      <Paper className="flex paper-products  col  ">
        <Grid className="toppage flex sp-between">
          <TextField onChange={(e)=>handleSearch(e)} id="outlined-basic" label="Search here" variant="outlined" />

          <TablePagination
            rowsPerPageOptions={[1, 8]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
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
              {data.slice(page * 8, page * 8 + 8).map((row, indx) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    <TableCell>
                      <label>{row.Name}</label>{" "}
                    </TableCell>
                    <TableCell>
                      {row.Pic.map((value) => {
                        return (
                          <img style={{ width: "120px",height:"120px" }} src={value}></img>
                        );
                      })}
                    </TableCell>

                    <TableCell>
                      {" "}
                      <label>{row.Status}</label>{" "}
                    </TableCell>

                    <TableCell>
                      {" "}
                      <label>{row.Discount}</label>{" "}
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Grid className="Size-container">
                        {row.Size.map((value) => {
                          return (
                            <p>
                              {value.Name}:${value.Price}
                            </p>
                          );
                        })}
                      </Grid>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <label>{row.stock}</label>{" "}
                    </TableCell>

                    <TableCell style={{position:"relative"}} className="flex col sp-between">
                  <Link to={`/product/${indx}`}>   <SettingsIcon color="primary"  /></Link> 

                      <DeleteOutline style={{cursor:"pointer"}}  onClick={()=>handleDelete(indx)} color="secondary" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
