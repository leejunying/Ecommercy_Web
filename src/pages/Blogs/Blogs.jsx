import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import "./Blogs.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import { Get_Post } from "../../API/Api";
import Loading from "../../Components/Loading/Loading.jsx";

const Blogs = () => {
  const hide = {
    opacity: "0",
  };
  const show = {
    opacity: "1",
  };

  const [data, setData] = useState([]);

  const unsestyle = {
    backgroundColor: "rgb(77 54 44)",
  };
  const sestyle = {
    backgroundColor: "rgb(188 89 89)",
  };

  const [select, setSelect] = useState({ post: {}, indx: 0 });

  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  const formatdate = (date) => {
    let newdate = new Date(date);

    const [year, month, day, hour, minute, seconds] = [
      newdate.getFullYear(),
      newdate.getMonth() + 1,
      newdate.getDate(),
      newdate.getHours(),
      newdate.getMinutes(),
      newdate.getSeconds(),
    ];

    return {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds,
    };
  };

  useEffect(async () => {
    let load = (await Get_Post(1)) || [];

    if (load.data.data != undefined) {
      setData(load.data.data);
    }
  }, []);

  //Load post
  useEffect(() => {
    if (data != undefined) setSelect({ post: data[0], indx: 0 });
  }, [data]);

  useEffect(() => {
    console.log(select);
  }, [select]);

  return (
    <Fragment>
      <Grid className="flex al-center jus-center" container={true} md={12}>
        {data.length > 0 && select.post != undefined ? (
          <Grid container={true} md={10} className="flex Blogs">
            <Grid items={true} md={3} className=" Blogs-list">
              {data.map((data, indx) => {
                return (
                  <div
                    key={indx}
                    style={select.post._id === data._id ? sestyle : unsestyle}
                    onClick={() => {
                      setSelect({ post: data, indx: indx });
                    }}
                    className="flex col Post-row"
                  >
                    <h3 style={{ color: "d0fbff" }}>{data.Title}</h3>
                    <h4>
                      {formatdate(data.create_date).day}/
                      {formatdate(data.create_date).month}/
                      {formatdate(data.create_date).year}
                      <span>&nbsp;&nbsp;</span>
                      {formatdate(data.create_date).hour}h-
                      {formatdate(data.create_date).minute}m-
                      {formatdate(data.create_date).seconds}s
                    </h4>
                  </div>
                );
              })}
            </Grid>

            <Grid
              stlye={data.length > 0 ? hide : show}
              items={true}
              md={9}
              className="Seleted"
            >
              <Grid
                style={{ marginBottom: "10px" }}
                className="flex sp-arround"
                items={true}
                md={12}
              >
                {" "}
                <Link to={`/Post`}>
                  <i className="fas fa-plus"></i> Create new post
                </Link>
              </Grid>
              <Grid
                items={true}
                style={{
                  height: "100vh",
                  borderTop: "0.5 solid rgb(117, 116, 116)",
                }}
                className=" flex jus-center col al-center"
              >
                <Grid className="flex col Loadpost">
                  <Link
                    className="flex al-center"
                    style={{
                      outlineStyle: "none",
                      textDecoration: "none",
                      color: "green",
                    }}
                    to={`/Post/${select.post._id}`}
                  >
                    {" "}
                    <SettingsIcon color="primary" /> Edit post
                  </Link>
                  <Grid className="flex al-center">
                    <label className="labelpost">Title:</label>{" "}
                    <h3>{select.post.Title}</h3>
                  </Grid>
                  <Grid className="flex col ">
                    <label className="labelpost">Displayiamge</label>
                    <img
                      style={{
                        height: "300px",
                        width: "400px",
                        marginLeft: "2%",
                      }}
                      src={select.post.Displayimage.Data}
                    ></img>
                  </Grid>

                  <Grid className="flex col">
                    <label className="labelpost">Cotent</label>

                    <Grid
                      style={{ marginBottom: "5%", marginLeft: "2%" }}
                      dangerouslySetInnerHTML={{
                        __html: select.post.Post_content,
                      }}
                    ></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Loading />
        )}
      </Grid>
    </Fragment>
  );
};

export default Blogs;
