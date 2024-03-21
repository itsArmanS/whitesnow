import React, { useState, useEffect } from "react";
import "../styles/homePanels.css"
import "../styles/homeLayout.css";
import PostList from "./PostList";

function MainFeed(props) {

  return (
    <div className="main-feed">
      <div className="feed-header">
        MY FLAKES
      </div>
      <PostList />
    </div>
  )
}

export default MainFeed