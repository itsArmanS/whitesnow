import React, { useEffect, useState, useContext } from "react";
import PostList from "./PostList"
import "../styles/profileLayout.css"
import "../styles/profileFeed.css"
import RefreshContext from "./RefreshContext";
import AuthContext from "./AuthContext";

function UserProfilePostsLayout() {
  const [posts, setPosts] = useState([])
  const { currentUserID } = useContext(AuthContext)
  const { refresh, setRefresh } = useContext(RefreshContext)

  useEffect(() => {
    const allPosts = async () => {
      const response = await fetch("http://localhost:3005/posts");
      const returnedData = await response.json();

      const userPosts = returnedData.filter(posts => posts.userID === currentUserID);
      setPosts(userPosts);

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