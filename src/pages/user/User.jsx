import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
const columns = [
  { id: "Id", label: "ID", minWidth: 20 },
  { id: "Items", label: "ITEMS", minWidth: 150 },
  { id: "Amount", label: "AMOUNT", minWidth: 100 },
  { id: "Date", label: "CREATE DATE", minWidth: 100 },
];
export default function User(match) {
  const users = useSelector((state) => state.users);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const user = users[match.match.params.userId];

  var date = new Date(user.create_date);
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();

  let listamount = user.History.map((value) => {
    return value.Amount;
  });
  let transaction = listamount.reduce((a, b) => a + b, 0);

  return (
    <div className="user">
      <div className="flex jus-center userTitleContainer">
        <h2 style={{ color: "white" }} className="userTitle">
          User
        </h2>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {user.Firstname}&nbsp;{user.Lastname}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.Email}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                {d}-{m}-{y}
              </span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.Phone}</span>
            </div>
            {/* <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle"></span>
            </div> */}
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{user.Address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">PAYMENT</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Level</label>
                <label>{user.Level}</label>
              </div>
              <div className="userUpdateItem">
                <label>Transaction</label>
                <label>{transaction}</label>
              </div>
              <div className="userUpdateItem">
                <label>History</label>
                <Paper className="flex jus-center col al-center History">
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
                        {user.History.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ).map((row, indx) => {
                          return (
                            <TableRow hover role="checkbox" key={indx}>
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
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={user.History.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
