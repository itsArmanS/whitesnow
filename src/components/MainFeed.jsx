import React, { useState, useEffect } from "react";
import "../styles/homePanels.css"
import "../styles/homeLayout.css";
import PostList from "./PostList";

async function MainFeed() {
  const [posts, setPosts] = useState([])

  const allPosts = () => {
    const response = fetch("http://localhost:3005/posts");
    const returnedData = response.json();
    console.log(returnedData, "returned")

    setPosts(returnedData);
    console.log(returnedData, "returned")
  }

  useEffect(() => {
    allPosts()
  }, [])

  if (!Array.isArray(posts)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-feed">
      <div className="profile-header-buttons">
        <button>FLAKES</button>
        <button>STARS</button>
        <button>FOLLOWERS</button>
      </div>
      <div className="profile-posts">
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default MainFeed