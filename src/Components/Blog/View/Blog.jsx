import React from "react";
import { Grid } from "@material-ui/core";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import "../Css/Blog.css";

const Blog = () => {
  const [list, setList] = useState([]);

  const Get_Post = (page) => {
    let data = axios
      .get(`http://localhost:4000/blog/load/${page}`)
      .then((data) => {
        return data;
      })
      .then((lastdata) => {
        if (lastdata.status == 200) setList(lastdata.data);
      });

    return data;
  };

  useEffect(async () => {
    await Get_Post(1);
  }, []);

  //Pagegination number

  const [pagenum, setPagenum] = useState(1);
  const handleChange = async (event, value) => {
    setPagenum(value);

    await Get_Post(value);
  };

  console.log(list.data);

  return (
    <Grid container={true} className=" flex  jus-center Blog">
      <Grid items={true} md={1}>
        {" "}
        <h3>Blogs list </h3>
      </Grid>

      <Grid items={true} className=" flex  Blog-container" md={6}>
        {list.data != null && list.data != undefined
          ? list.data.map((data, indx) => {
              return (
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    width: "50%",
                  }}
                  to={`/Blog/${data._id}`}
                >
                  {" "}
                  <Grid className="  flex col jus-center al-center Blog-item">
                    <img
                      style={{ width: "50%", height: "70%" }}
                      src={data.Displayimage.Data}
                    ></img>
                    <h3>{data.Title}</h3>
                  </Grid>
                </Link>
              );
            })
          : null}
      </Grid>

      <Grid className="flex jus-center" items={true} md={4}>
        {" "}
        <Pagination
          className=" flex "
          count={list.totalpage}
          color="secondary"
          page={pagenum}
          onChange={(e) => handleChange(e, 1)}
        />
      </Grid>
    </Grid>
  );
};

export default Blog;
