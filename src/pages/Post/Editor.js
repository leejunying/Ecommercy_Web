import React from "react";
import { Fragment, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import Resizer from "react-image-file-resizer";
import "./styles.css";
import { Find_Post, Update_Post, Delete_Post } from "../../API/Api";
import Loading from "../../Components/Loading/Loading";
import { Grid } from "@material-ui/core";

export const Editor = (props) => {
  const { data } = props || [];

  const err = {
    style: { border: "1px solid red" },
    message: "Required",
  };
  const noerr = {
    style: { border: "none" },
    message: "Post name ",
  };

  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("");
  const [displayid, setDisplayid] = useState("");
  const [content, setContent] = useState("");
  const [loadedit, setLoadedit] = useState(false);
  const [result, setResult] = useState("");
  const [titleStyle, settitleStyle] = useState(noerr);
  const [contentStyle, setcontentStyle] = useState(noerr);

  const setReset = () => {
    setTitle("");
    setContent("");
    setDisplay("");
  };

  useEffect(async () => {
    if (data != undefined) {
      let result = await Find_Post(data);

      if (result.data.data[0] != undefined) {
        let olddata = result.data.data[0];
        setDisplay(olddata.Displayimage.Data);
        setDisplayid(olddata.Displayimage._id);
        setTitle(olddata.Title);
        setContent(olddata.Post_content);

        setLoadedit(true);
      }
    } else setLoadedit(true);
  }, []);

  const Delete = async (event) => {
    event.preventDefault();
    const Delete = {
      post: {
        _id: data,
      },
      display: {
        _id: displayid,
      },
    };

    let newdelete = await Delete_Post(Delete);

    if (newdelete.status == 200) {
      setResult("Deleted successfully");
      setReset();
    }
  };

  const Update = async (event) => {
    event.preventDefault();

    const update = {
      post: {
        _id: data,
        Post_content: content,
        Title: title,
      },
      display: {
        _id: displayid,
        Data: display,
      },
    };

    let newupdate = await Update_Post(update);

    if (newupdate.status == 200) {
      setResult("Updated successfully");
    }
  };

  const onClick = (event) => {
    event.preventDefault();
    if (title.length == 0) {
      settitleStyle(err);
    }
    if (content.length == 0) {
      setcontentStyle(err);
    }
    if (content.length > 0 && title.length > 0) {
      var sendpost = {
        admin: "admin",
        Title: title,
        Content: content,
      };

      axios
        .post("http://localhost:4000/blog/createpost", {
          admin: "admin",
          post: sendpost,
          displayimg: display,
        })
        .then((res) => {
          return res.data;
        })

        .then((data) => {
          if (data.status == 200) {
            //Clear content and show success

            settitleStyle(noerr);
            setcontentStyle(noerr);

            setResult("upload success");

            setReset();
          } else {
            //Show content
            setResult("Fail to upload your display image too large");
          }
        });
    }
  };

  const handleChange = (value) => {
    setContent(value);
  };

  const handleTiTle = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleimg = (e) => {
    try {
      Resizer.imageFileResizer(
        e.target.files[0],
        600,
        600,
        "JPEG",
        100,
        0,

        (uri) => {
          setDisplay(uri);
        },
        "base64",
        400,
        400
      );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(loadedit);
  return (
    <Fragment>
      <Grid
        md={10}
        className="flex al-center jus-center text-editor"
        container={true}
      >
        {" "}
        {loadedit == false ? (
          <Loading />
        ) : (
          <div className="text-editor">
            <div className="flex btn-place">
              {data != undefined ? (
                <div style={{ width: "50vw" }} className=" flex sp-between">
                  <button className="btnPost" onClick={(e) => Update(e)}>
                    Edit
                  </button>

                  <button className="btnPost" onClick={(e) => Delete(e)}>
                    Delete
                  </button>
                </div>
              ) : (
                <button className="btnPost" onClick={(e) => onClick(e)}>
                  {" "}
                  Post{" "}
                </button>
              )}
              <div style={{ marginLeft: "30vw" }}>{result}</div>
            </div>
            <div className="Notice-area">
              <div className="bd flex col al-center jus-center Noticebox">
                <h4> {result} </h4>
              </div>{" "}
            </div>{" "}
            <div className="flex col top_post">
              <div style={{ width: "50vw" }} className="flex al-center  ">
                {" "}
                <label className="lb_title"> Title </label>{" "}
                {data != undefined ? (
                  <input
                    style={titleStyle.style}
                    onChange={(e) => handleTiTle(e)}
                    className="post_title"
                    autoFocus
                    value={title}
                  />
                ) : (
                  <input
                    style={titleStyle.style}
                    onChange={(e) => handleTiTle(e)}
                    placeholder={titleStyle.message}
                    className="post_title"
                    autoFocus
                    value={title}
                  />
                )}
              </div>{" "}
              <div className="flex col">
                <div className="flex al-center">
                  <label className="lb_title"> Image </label>{" "}
                  <input
                    type="file"
                    onChange={(e) => handleTitleimg(e)}
                  ></input>
                </div>
                <div className="flex col Display-place">
                  {data != undefined ? (
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={display}
                    ></img>
                  ) : display.length > 0 ? (
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={display}
                    ></img>
                  ) : (
                    <div
                      style={{ width: "100%", margin: "3%" }}
                      className="flex col al-center jus-center"
                    >
                      No image to display
                      <img
                        style={{ width: "20%" }}
                        src={
                          "https://static.thenounproject.com/png/3958907-200.png"
                        }
                      ></img>
                    </div>
                  )}{" "}
                </div>
              </div>{" "}
            </div>{" "}
            <EditorToolbar />
            <div style={contentStyle.style} className="post-content">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={handleChange}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
              />{" "}
            </div>{" "}
          </div>
        )}
      </Grid>
    </Fragment>
  );
};

export default Editor;
