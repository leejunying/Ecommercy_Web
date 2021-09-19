import React from "react";
import axios from "axios";
import "./Chatbox.css";
import { Grid } from "@material-ui/core";
import { Fragment, useEffect, useState, useRef } from "react";

import socketIOClient from "socket.io-client";
import { Message } from "@material-ui/icons";

export default function Chatbox() {
  const scrollRef = useRef();

  const Unseen = {
    backgroundColor: "rgba(45, 58, 231, 0.986)",
  };

  const Seen = {
    backgroundcolor: "rgba(245, 245, 245, 0.295)",
  };

  const [selected, Setselected] = useState(0);

  const [listroom, setListroom] = useState([]);

  const [listmessage, setListmessage] = useState([]);

  const [newmessage, setNewmessage] = useState({});

  const [newroom, setNewroom] = useState({});

  const [mysend, setMysend] = useState({
    Room: 0,
    Message: "",
    User: "admin",
  });

  const host = "http://localhost:4000";

  const socket = useRef();

  useEffect(() => {
    document.querySelector("#chat").scrollTop = 99999;
  }, [selected]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/chatbox/Loadroom")
      .then((res) => {
        return res.data;
      })
      .then((response) => {
        //Connect and create new Room and set default data for send
        socket.current = socketIOClient.connect(host);
        socket.current.emit("Client", "admin");

        let data = response.Listroom;

        data = data.map((obj) => {
          return { ...obj, seen: Unseen };
        });

        setListroom(response.Listroom);
        setListmessage(response.Listmessage);
        socket.current.on(`Newroom`, (message) => {
          setListroom((prestate) => [...prestate, message]);
        });

        socket.current.on("Client_off", (roomdelete) => {
          let old = listroom;

          old = old.filter((room) => room.Room != roomdelete);

          setListroom(old);
        });
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    //New message nofitication
    listroom.map((data) => {
      socket.current.on(`res_${data.Room}`, (message) => {
        console.log(message);

        setNewmessage(message);

        document.querySelector(`#s${message.Room}`).style.backgroundColor =
          "rgba(241, 58, 58, 0.986)";
      });
    });
  }, [listroom]);

  useEffect(() => {
    //Load new message
    setListmessage((prestate) => [...prestate, newmessage]);
    document.querySelector("#chat").scrollTop = 99999;
  }, [newmessage]);

  const handleChange = (e) => {
    setMysend({ ...mysend, Message: e.target.value });
  };

  const handlekeyPress = (e) => {
    if (e.key == "Enter") {
      console.log(selected);

      //Send event message to Room
      socket.current.emit(`admin${selected}`, {
        User: `admin`,
        Room: `${selected}`,
        Message: mysend.Message,
      });

      setNewmessage(mysend);
      //Clear input
      setMysend({ ...mysend, Message: "" });
    }
  };

  const handleClick = () => {
    //Send event message to Room

    socket.current.emit(`admin_message`, {
      User: `admin`,
      Room: selected,
      Message: mysend.Message,
    });

    setNewmessage(mysend);

    //Clear input
    setMysend({ ...mysend, Message: "" });
  };

  const lastmessage = (roomid) => {
    let result = listmessage || [];

    result = result

      .filter((data) => parseInt(data.Room) == roomid && data.User != "admin")
      .map((data) => {
        return data.Message;
      });

    return result[result.length - 1];
  };

  const selectUser = (room) => {
    Setselected(room);
    setMysend({ ...mysend, Room: room });

    document.querySelector(`#s${room}`).style.backgroundColor =
      "rgba(245, 245, 245, 0.295)";
  };

  const formatdate = (stringdate) => {
    var date = new Date(stringdate); // dateStr you get from mongodb

    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var h = date.getHours();
    var mi = date.getMinutes();

    return {
      day: d,
      month: m,
      year: y,
      hours: h,
      minute: mi,
    };
  };

  return (
    <Grid container={true} className=" Chatbox">
      <Grid items={true} md={4} className="List_guest">
        {listroom.length != 0
          ? listroom.map((data, indx) => {
              return (
                <Grid
                  id={`s${data.Room}`}
                  style={data.seen}
                  onClick={() => selectUser(data.Room)}
                  items={true}
                  className="  flex jus-center al-center   user"
                >
                  <Grid items={true} md={4} className=" flex jus-center  ">
                    {" "}
                    <i className=" fas fa-user-alt"></i>
                  </Grid>
                  <Grid items={true} md={8} className="flex col ">
                    <Grid items={true}>
                      <h2 className="title">Guest_{data.Room}</h2>
                    </Grid>
                    <Grid items={true} className=" status">
                      {lastmessage(data.Room)}
                    </Grid>
                  </Grid>
                </Grid>
              );
            })
          : null}
      </Grid>

      <Grid items={true} md={6} className=" Message_box">
        <Grid items={true} className="box_top">
          <Grid items={true}>
            {" "}
            <h2 style={{ color: "black" }} className="title">
              {selected == 0 ? "" : `Guest_${selected}`}
            </h2>
          </Grid>
        </Grid>

        <Grid items={true} className="box_container">
          <ul id="chat">
            {listmessage
              .sort((a, b) => b.date - a.date)
              .filter((room) => parseInt(room.Room) == selected)
              .map((data) => {
                return data.User != "admin" ? (
                  <li className="you">
                    <div className="entete">
                      <span className="status green"></span>
                      <h2>{data.User}</h2>
                      <h3>{`${formatdate(data.create_date).day}/${
                        formatdate(data.create_date).month
                      }&nbsp${formatdate(data.create_date).hours}:${
                        formatdate(data.create_date).minute
                      }`}</h3>
                    </div>
                    <div className="triangle"></div>
                    <div className="message">{data.Message}</div>
                  </li>
                ) : (
                  <li className="me">
                    <div class="entete">
                      <h3>{data.User}</h3>
                      <h2>{data.create_date}</h2>
                      <span class="status blue"></span>
                    </div>
                    <div className="triangle"></div>
                    <div className="message">{data.Message}</div>
                  </li>
                );
              })}
          </ul>
        </Grid>

        <Grid items={true} className="flex jus-center al-center box_input">
          <input
            value={mysend.Message}
            placeholder="Aa"
            className="input"
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => handlekeyPress(e)}
            onClick={() =>
              selected != 0
                ? (document.querySelector(
                    `#s${selected}`
                  ).style.backgroundColor = "rgba(245, 245, 245, 0.295)")
                : " "
            }
          ></input>{" "}
          <i onClick={() => handleClick()} className="far fa-paper-plane"></i>
        </Grid>
      </Grid>
    </Grid>
  );
}
