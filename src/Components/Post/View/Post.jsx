import React from "react";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../Css/Post.css";

const Find_Post = (postid) => {
  let data = axios
    .get(`http://localhost:4000/blog/find/${postid}`)
    .then((data) => {
      return data;
    })
    .then((datas) => {
      if (datas.status == 200) {
        return datas.data;
      }
    });

  return data;
};

const Post = (match) => {
  const [post, setPost] = useState();

  const postid = match.match.params.postid;

  console.log(postid);

  useEffect(async () => {
    let data = (await Find_Post(postid)) || [];

    if (data != null && data != undefined) {
      setPost(data.data);
      console.log(post);
    }
  }, []);

  return (
    <Grid conatiner={true} className="b Post">
      <Grid items={true} md={12} className="flex jus-center Post-container">
        {post != undefined ? (
          <Grid items={true} md={6} lassName="bd Post-items">
            <h3>{post[0].Title}</h3>
            <img
              style={{ width: "35%", margin: "10px", objectFit: "cover" }}
              src={post[0].Displayimage.Data}
            ></img>

            <Grid
              items={true}
              md={12}
              style={{ marginBottom: "10px" }}
              dangerouslySetInnerHTML={{
                __html: post[0].Post_content,
              }}
            ></Grid>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Post;
