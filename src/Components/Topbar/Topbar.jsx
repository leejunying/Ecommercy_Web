import React from 'react'
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import { useEffect,useState,useRef } from 'react';
import { io } from "socket.io-client";
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {useDispatch, useSelector} from"react-redux"
import { getdata } from '../../Redux';


import DATA from "../../API/Api"
 const  Topbar=()=>{

     const dispatch = useDispatch()
    const host = "http://localhost:4000";

   const [user,setUser]=useState([])
   const [payment,setPayment]=useState([])

  
useEffect(()=>{

  // Loaduser();
  // Loadpayment();
 Get_Data()



},[])
 
 



 //client nhận dữ liệu từ server
 
 
//  const socket = io("http://localhost:4000");

 
 
//  socket.on("newuser",(user)=>{


//   console.log(user)

//  })

//  socket.on("newpayment",payment=>{


//   console.log(payment)
//  })



const Get_Data=()=>{


//   axios
//  .get("http://localhost:4000/admin/data")
//  .then((res) => {
//    return res.data;
//  })
//  .then((data) => { 

//   if(data!="")
//   {
//   dispatch(getdata(data[1],data[2],data[0],data[3]))

//  }
//    })
//  .catch((error) => {
//    console.error(error);
//  });




}




 

    const Loaduser=()=>{


      
            axios
             .get("http://localhost:4000/account/user")
             .then((res) => {
               return res.data;
             })
             .then((data)=>{

                   setPayment(data)

             })


    }


    const Loadpayment=()=>{


      axios
      .get("http://localhost:4000/payments/payment")
      .then((res) => {
        return res.data;
      })
      .then((data)=>{

             setUser(data)

      })
    }



    return (

        <Grid container={true} md={12} className="topbar">

              <Grid style={{padding:"2%"}} items={true} md={12} className="flex al-center sp-between topbarWrapper">
             
              <Grid items={true} md={2} className="topLeft"><h3>Admin LeeJunYing</h3></Grid>
              <Grid  items={true} md={2} className="topRight"> 


              <Grid items={true} md={4} className=" flex sp-between notice-container">
              
              <Grid className="topbarIconContainer">
              <NotificationsNone></NotificationsNone>
              <span className="topIconBadge">2</span>
              </Grid>

              <Grid className="topbarIconContainer">
               <Language />
               <span className="topIconBadge">2</span>

               </Grid>
              </Grid>
              
              
               </Grid>

              </Grid>
             
        </Grid>



    )

}



export default Topbar