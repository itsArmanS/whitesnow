import React, { useState, useEffect } from "react";
import "../styles/homePanels.css"
import "../styles/homeLayout.css";
import PostList from "./PostList";

async function MainFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3005/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts)


  return (
    <div className="main-feed">
      <div className="profile-header-buttons">
        <button>FLAKES</button>
        <button>STARS</button>
        <button>FOLLOWERS</button>
      </div>
      <div className="profile-posts">
        <PostList />
      </div>
    </div>
  )
}

export default MainFeed