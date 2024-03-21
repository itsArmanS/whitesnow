import React from "react";
import "../styles/homePanels.css"
import "../styles/homeLayout.css";
import CreatePostButton from "./CreatePostButton";

function LeftPanel(props) {

  return (
    <div className="left-panel">
      <CreatePostButton />
    </div>
  )
}

export default LeftPanel