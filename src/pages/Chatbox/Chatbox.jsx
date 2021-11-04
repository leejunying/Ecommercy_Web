import React from "react";
import axios from "axios";
import "./Chatbox.css";
import { Grid } from "@material-ui/core";
import { Fragment, useEffect, useState, useRef } from "react";

import socketIOClient from "socket.io-client";
import { Message } from "@material-ui/icons";

export default function Chatbox() {
  var list;

  const scrollRef = useRef();

  const Unseen = {
    backgroundColor: "rgba(243, 234, 115, 0.986)",
  };

  const Seen = {
    backgroundcolor: "#21ad78",
  };

  const offline = {
    backgroundColor: "rgb(248, 8, 8)",
  };

  const [selected, Setselected] = useState(0);

  const [listroom, setListroom] = useState([]);

  const [offroom, setOffroom] = useState();

  const [listmessage, setListmessage] = useState([]);

  const [newmessage, setNewmessage] = useState({});

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
        setListroom(response.Listroom);

        setListmessage(response.Listmessage);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    socket.current = socketIOClient.connect(host);
    socket.current.emit("Client", "admin");

    socket.current.on(`Newroom`, (message) => {
      setListroom((pre) => [...pre, message]);
    });
    socket.current.on("Client_off", (roomoffline) => {
      console.log(roomoffline);
      setOffroom(roomoffline);
    });
    socket.current.on("disconnect", function () {});
  }, []);

  useEffect(() => {
    //New message nofitication and update message

    listroom.map((data) => {
      socket.current.on(`res_${data.Room}`, (message) => {
        console.log(message);

        setNewmessage(message);
      });
    });
  }, [listroom]);

  useEffect(() => {
    let off = offroom || [];

    if (off != "") {
      // swap down bottom

      setListroom(
        listroom.map((item, index) => {
          return item.Room == off
            ? {
                Room: item.Room,
                Participant: item.Participant,
                Status: "offline",
                Style: offline,
              }
            : item;
        })
      );
    }
  }, [offroom]);

  useEffect(() => {
    //Load new message
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });

    if (newmessage.User != "admin") {
      swaproomontop(newmessage.Room);
    }

    setListmessage((prestate) => [...prestate, newmessage]);
  }, [newmessage]);

  const Refresh = () => {
    let list = listroom;
    list = list.filter((data) => data.Status != "offline");
    let allmess = listmessage;
    allmess.map((data) => list.indexOf(data.Room) == 1);

    Setselected(0);
    setListmessage(allmess);
    setListroom(list);
    let user = { admin: true };
    axios
      .post("http://localhost:4000/chatbox/Refresh", user)
      .then((res) => {
        return res.data;
      })
      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const swaproomontop = (roomid) => {
    let list = listroom;

    try {
      let foundindx = list.findIndex((allroom) => allroom.Room == roomid);

      console.log(list[foundindx]);

      list.unshift(list[foundindx]);

      list.splice(foundindx + 1, 1);

      list[0].Style = Unseen;

      console.log(list);

      setListroom(list);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setMysend({ ...mysend, Message: e.target.value });
  };

  const handlekeyPress = (e) => {
    if (e.key == "Enter") {
      console.log(selected);

      //Send event message to Room
      socket.current.emit(`admin_message`, {
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
    let list = listroom;

    let foundindex = list.findIndex((aroom) => aroom.Room == room);
    if (list[foundindex].Status != "offline") list[foundindex].Style = Seen;

    setListroom(list);
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
    <Grid container={true} className="flex Chatbox">
      <Grid items={true} md={4} className="List_guest">
        {console.log(listroom)}
        {listroom.map((data, indx) => {
          return data != undefined ? (
            <Grid
              id={`s${data.Room}`}
              style={data.Style}
              onClick={() => selectUser(data.Room)}
              items={true}
              className="  flex jus-center al-center   user"
            >
              <Grid items={true} md={4} className=" flex jus-center  ">
                {" "}
                <i className=" fas fa-user-alt"></i>
              </Grid>
              <Grid items={true} md={8} className="flex col ">
                <Grid className="flex sp-between" items={true}>
                  <h2 className="title">Guest_{data.Room}</h2>
                  <label style={{ color: "white" }}>{data.Status}</label>
                </Grid>
                <Grid items={true} className=" status">
                  {lastmessage(data.Room)}
                </Grid>
              </Grid>
            </Grid>
          ) : null;
        })}
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
                return (
                  <div ref={scrollRef}>
                    {data.User != "admin" ? (
                      <li className="you">
                        <div className="entete">
                          <span className="status green"></span>
                          <h2>{data.User}</h2>
                          <h3>{`${formatdate(data.create_date).day}/${
                            formatdate(data.create_date).month
                          }" "${formatdate(data.create_date).hours}:${
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
                    )}
                  </div>
                );
              })}
          </ul>
        </Grid>

        <Grid items={true} className=" flex jus-center al-center box_input">
          <input
            value={mysend.Message}
            placeholder="Aa"
            className=" input"
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => handlekeyPress(e)}
          ></input>{" "}
          <i onClick={() => handleClick()} className="far fa-paper-plane"></i>
        </Grid>
      </Grid>

      <Grid items={true} md={2} className="flex jus-center  ">
        <button
          onClick={() => {
            Refresh();
          }}
          className="btnRefresh"
        >
          Refresh room
        </button>
      </Grid>
    </Grid>
  );
}
