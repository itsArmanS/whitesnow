import React, { useState, useEffect } from "react";
import "../styles/homePanels.css"
import "../styles/homeLayout.css";
import PostList from "./PostList";
import useFetchDatabase from "./useFetchDatabase";

function MainFeed({ refreshPosts }) {
  const posts = useFetchDatabase({ refreshPosts });

  return (
    <div className="main-feed">
      <div className="feed-header">
        MY FLAKES
      </div>
      <div className="profile-posts">
        <PostList posts={posts} />
      </div>
    </div>
  )
}

export default MainFeed