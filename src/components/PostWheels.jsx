import React from "react";
import "../styles/postWheels.css"
import Wheel from "./Wheel";
import MiddleWheel from "./MiddleWheel";

function PostWheels() {
  return (
    <div className="post-wheels-wrapper">
      <Wheel />
      <MiddleWheel />
      <Wheel />
    </div>
  )
}


export default PostWheels