import React, { useEffect, useState, useContext } from "react";
import PostList from "./PostList"
import "../styles/profileLayout.css"
import "../styles/profileFeed.css"
import RefreshContext from "./contexts/RefreshContext";
import AuthContext from "./contexts/AuthContext";
import ProfilePostHeaderButtons from "./ProfilePostHeaderButtons";

function UserProfilePostsLayout({ userID, userData }) {
  const [posts, setPosts] = useState([])
  const { refresh, setRefresh } = useContext(RefreshContext)
  const { currentUserID } = useContext(AuthContext);

  useEffect(() => {
    const allPosts = async () => {
      const response = await fetch("http://localhost:3005/posts");
      const returnedData = await response.json();

      const userPosts = returnedData.filter(posts => posts.userID === userID);
      setPosts(userPosts);
    }
    allPosts();

  }, [refresh])

  return (
    <div className="profile-feed">
      <ProfilePostHeaderButtons currentUserID={currentUserID} userID={userID} userData={userData} />
      <div className="profile-posts">
        <PostList posts={posts} setRefresh={setRefresh} />
      </div>
    </div>
  )
}

export default UserProfilePostsLayout