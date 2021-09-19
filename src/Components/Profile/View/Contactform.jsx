import React from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import "../CSS/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { saveinfo } from "../../../Redux";
const Contactform = () => {



  const profile = useSelector((state) => state.tokenReducer.infodata);
  


  const dispatch=useDispatch()
  const [newadd, setNewadd] = useState(profile[0].Address);
  const [newphone, setNewphone] = useState(profile[0].Phone);
  const [noitce, setNoitce] = useState("");

  const handlePhone = (e) => {
    setNewphone(e.target.value);
  };

  const handleAddress = (e) => {
    setNewadd(e.target.value);
  };

  const handleSave = () => {
    axios
      .post("http://localhost:4000/account/updatecontact", {
        Email: profile[0].Email,
        Address: newadd,
        Phone: newphone,
      })
      .then((res) => {
        return res.data;
      })
      .then((mess) => {
         if (mess == true) {
          
          let updateprofile=profile
          updateprofile[0].Address=newadd
          updateprofile[0].Phone=newphone

          dispatch(saveinfo(updateprofile))

         }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Grid container={true} md={12} className="flex jus-center Contactform">
      <Grid items={true} md={3} className="Contactfom-container">
        <form autoComplete="off">
          <h3>Change your contact </h3>

          <Grid items={true} className="flex col">
            <TextField
              id="standard-basic"
              label="Address"
              autoFocus
              onChange={(e) => handleAddress(e)}
              value={newadd}
             ></TextField>

            <TextField
              id="standard-basic"
              label="Phone"
              type="number"
              autoFocus
              onChange={(e) => handlePhone(e)}
              value={newphone}
             ></TextField>
          </Grid>

          <button
            onClick={handleSave}
            style={{
              marginTop: "10px",
              backgroundColor: "Green",
              color: "White",
              fontSize: "14px",
              padding: "5px",
              outlineStyle: "none",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contactform;
