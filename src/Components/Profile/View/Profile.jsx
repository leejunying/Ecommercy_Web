import React  from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import "../CSS/Profile.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {gettoken,saveinfo} from "../../../Redux"
import { useHistory, useLocation } from "react-router-dom";

const Profilepage = () => {

  const dispatch=useDispatch()
  const profile = useSelector(state=>state.tokenReducer.infodata)|| []

 

 
 

  //Function//////////////////////////
  

 
  return (
    <Grid container={true} className="Profile">
      <Grid container={true} className="flex State_bar" md={12}>
        <Grid items={true} md={1}></Grid>
        <Grid items={true} md={3}>
          Home / Profle /{profile[0].Email}
        </Grid>
        </Grid>
        <Grid container={true } className="flex  Profile-infomation">

        <Grid  className="wislist"></Grid>
        <Grid className="history"></Grid>
        <Grid className="logout"></Grid>




     
        
     
      </Grid>
    </Grid>
  );
};
export default Profilepage;
