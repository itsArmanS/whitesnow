import React, { useEffect, useState, useContext } from "react";
import PostList from "./PostList"
import "../styles/profileLayout.css"
import "../styles/mainFeed.css"
import RefreshContext from "./RefreshContext";

function UserProfilePostsLayout() {
  const [posts, setPosts] = useState([])
  const { refresh, setRefresh } = useContext(RefreshContext)

  useEffect(() => {
    const allPosts = async () => {
      const response = await fetch("http://localhost:3005/posts");
      const returnedData = await response.json();
      console.log(returnedData, "returned")

      setPosts(returnedData);
      console.log(returnedData, "returned")
    }
    allPosts();
  }, [refresh])

  return (
    <div className="profile-feed">
      <div className="profile-header-buttons">
        <button>FLAKES</button>
        <button>STARS</button>
        <button>FOLLOWERS</button>
      </div>
      <div className="profile-posts">
        <PostList posts={posts} />
      </div>
    </div>
  )
}

export default UserProfilePostsLayout