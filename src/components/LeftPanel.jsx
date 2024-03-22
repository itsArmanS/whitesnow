import React from "react";
import "../styles/homePanels.css"
import "../styles/homeLayout.css";
import CreatePostButton from "./CreatePostButton";

function LeftPanel({ handleRefreshPosts }) {

  return (
    <div className="left-panel">
      <CreatePostButton handleRefreshPosts={handleRefreshPosts} />
    </div>
  )
}

export default LeftPanel