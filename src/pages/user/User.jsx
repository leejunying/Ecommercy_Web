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
import { useEffect } from "react";


export default function User(match) {

  const users = useSelector((state) => state.users);
  const  user = users[match.match.params.userId];

  var date = new Date(user.create_date);
  var d = date.getDate();
var m = date.getMonth()+1;
var y=date.getFullYear() 
 
 

 
let listamount=user.History.map(value=>{return value.Amount})
let transaction = listamount.reduce((a,b)=>a+b,0)


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User infomation</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
       
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.Firstname}&nbsp;{user.Lastname}</span>
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
              <span className="userShowInfoTitle">{d}-{m}-{y}</span>
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
               
              </div>
         
       
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
