import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex col">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div style={{ color: " gray" }}>LOADING POST ...</div>
    </div>
  );
};

export default Loading;
