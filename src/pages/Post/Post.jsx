import React from "react";
import Editor from "./Editor";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Post(match) {
  let { postId } = useParams();

  return (
    <div style={{ width: "80%" }}>
      <Editor data={postId}></Editor>
    </div>
  );
}
