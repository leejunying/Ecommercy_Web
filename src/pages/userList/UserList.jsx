import React from "react";
import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import SettingsIcon from "@material-ui/icons/Settings";
const columns = [
  { id: "name", label: "NAME", minWidth: "5%" },
  { id: "email", label: "Email", minWidth: "10%" },
  { id: "level", label: "Level", minWidth: "5%" },
  { id: "transaction", label: "Transaction", minWidth: "5%" },
  { id: "action", label: "ACTION", minWidth: "10%" },
];

export default function UserList() {
  const users = useSelector((state) => state.users);

  const [data, setData] = useState(users);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (indx) => {};
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const sumpayment = (history) => {
    let listamount = history.map((items) => {
      return items.Amount;
    });

    // let transaction = listamount.map((value) => {
    //   return value.reduce((a, b) => a + b, 0);
    // });

    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    let transaction = listamount.reduce(reducer);
    console.log(history);
    return transaction;
  };

 

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

  return (
    <div className="userList">
      <Paper className="flex paper-products  col  ">
        <Grid className="toppage flex sp-between">
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
                  <TableRow hover role="checkbox" tabIndex={1} key={row._id}>
                    <TableCell>
                      <label>
                        {row.Fristname} {row.Lastname}
                      </label>{" "}
                    </TableCell>
                    <TableCell>{row.Email}</TableCell>

                    <TableCell>
                      {" "}
                      <label>{row.Level}</label>{" "}
                    </TableCell>

                    <TableCell>
                      {" "}
                      <label>
                        {row.History.length > 0
                          ? sumpayment(row.History)
                          : null}
                      </label>{" "}
                    </TableCell>

                    <TableCell
                      style={{ position: "relative" }}
                      className="flex col sp-between"
                    >
                      <Link to={`/user/${indx}`}>
                        {" "}
                        <SettingsIcon color="primary" />
                      </Link>

                      <DeleteOutline
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(indx)}
                        color="secondary"
                      />
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
