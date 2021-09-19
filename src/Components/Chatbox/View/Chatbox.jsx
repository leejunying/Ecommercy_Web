import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";

import { Fragment, useEffect, useState, useRef } from "react";
import "../CSS/Chatbox.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { lovelist } from "../../../Redux";
import { useHistory, useLocation } from "react-router-dom";

import style from "styled-components";

const Styles = style.div`
 
 

 
 
 

`;

const Chatbox = () => {
  const [admin, setAdmin] = useState("");

  const [newmessage, setNewmessage] = useState({});

  const [message, setMessage] = useState([]);

  const [mysend, setMysend] = useState({
    Userya: "Guest",
    Room: 0,
    Message: "",
  });

  const host = "http://localhost:4000";

  const scrollRef = useRef();

  const socket = useRef();

  useEffect(() => {
    //Connect and create new Room and set default data for send
    socket.current = socketIOClient.connect(host);

    socket.current.emit(`Client`, "Client");

    socket.current.on("Newroom", (room) => {
      setMysend({
        User: `Guest_${room.Room}`,
        Room: `${room.Room}`,
        Message: "",
      });
    });
    socket.current.on("admin_status", (status) => {
      setAdmin(status);
    });

    console.log(message);
  }, []);

  useEffect(() => {
    socket.current.on(`admin_${mysend.Room}`, (data) => {
      setNewmessage(data);
    });
  }, [mysend]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });

    setMessage([...message, newmessage]);
  }, [newmessage]);

  const handleMymessage = (e) => {
    setMysend({ ...mysend, Message: e.target.value });
  };

  const handleKeypress = (e) => {
    if (e.key == "Enter") {
      //Send event message to Room
      socket.current.emit(`${mysend.Room}`, {
        User: `Guest_${mysend.Room}`,
        Room: mysend.Room,
        Message: mysend.Message,
      });

      setNewmessage(mysend);
      //Clear input
      setMysend({ ...mysend, Message: "" });
    }
  };

  const handleClick = () => {
    //Send event message to Room

    socket.current.emit(`${mysend.Room}`, {
      User: `Guest_${mysend.Room}`,
      Room: mysend.Room,
      Message: mysend.Message,
    });
    setNewmessage(mysend);

    //Clear input
    setMysend({ ...mysend, Message: "" });
  };

  return (
    <Fragment>
      <Styles>
        <Grid container={true} md={12} className="flex jus-end Chatbox">
          <Grid items={true} className="box_container">
            <Grid
              items={true}
              md={12}
              className="flex al-center sp-between box_title"
            >
              <h4>Chat with admin</h4>{" "}
              {admin == "online" ? (
                <div>
                  Online{" "}
                  <i
                    style={{ color: "#1bfd22db", marginLeft: "5px" }}
                    className="fas fa-circle"
                  ></i>
                </div>
              ) : (
                <div>
                  Offline{" "}
                  <i
                    style={{ color: "#3b14ebdb", marginLeft: "5px" }}
                    className="far fa-circle"
                  ></i>
                </div>
              )}
              <i className="far fa-window-close"
                onClick={()=>{


                  document.querySelector(".fa-comment-dots").style.display="block"
                  document.querySelector(".Chatbox").style.opacity=0



                }}
              
              ></i>
            </Grid>

            <Grid container={true} className="box_warapper flex col sp-between">
              <Grid className="box_show">
                {message
                  .filter((data) => data.Room == mysend.Room)
                  .map((data) => {
                    return (
                      <div ref={scrollRef}>
                        {data.User == "admin" ? (
                          <div className="row">
                            <div className="you">{data.Message}</div></div>
                        ) : (
                          <div className="row"><div className="me">{data.Message}</div> </div>
                        )}
                      </div>
                    );
                  })}
              </Grid>
            </Grid>

            <Grid items={true} className="flex jus-start  box-send">
              <Grid md={10} items={true}>
                {" "}
                <input
                  onKeyPress={(e) => handleKeypress(e)}
                  onChange={handleMymessage}
                  value={mysend.Message}
                  placeholder="Aa"
                  style={{ width: "100%", padding: "2%" }}
                  className="box_input"
                ></input>
              </Grid>
              <Grid md={2} items={true}>
                {" "}
                <i
                  onClick={() => handleClick()}
                  style={{ fontSize: "large", left: "10px", color: "blue" }}
                  className="fas fa-paper-plane"
                ></i>
              </Grid>{" "}
            </Grid>
          </Grid>
        </Grid>
      </Styles>
    </Fragment>
  );
};
export default Chatbox;
