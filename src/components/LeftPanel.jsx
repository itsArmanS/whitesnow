import React from "react";
import "../styles/homePanels.css"
import "../styles/homeLayout.css";
import CreatePostButton from "./CreatePostButton";
import ProfileButton from "./ProfileButton";

function LeftPanel({ handleRefreshPosts }) {

  return (
    <div className="left-panel">
      <CreatePostButton handleRefreshPosts={handleRefreshPosts} />
      <ProfileButton />
    </div>
  )
}

export default LeftPanel