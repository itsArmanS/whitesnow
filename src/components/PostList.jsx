import React, { useState, useEffect } from "react";
import "../styles/homePanels.css";
import "../styles/mainFeed.css";
import SnowflakeButton from "./SnowflakeButton";
import { useContext } from "react";
import AuthContext from "./AuthContext";

function PostList({ posts }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {posts.map((post) => (
        <div className="post-body" key={post.id}>
          <div className="post-user-buttons">
            <SnowflakeButton postID={post.id} />
          </div>
          <div className="post-user-data">
            <div className="post-user">
              <div className="profile-image">
                <img src={post.profileImage} alt="" />
              </div>
              <div className="user-username">
                {`@${currentUser} • `}
              </div>
              <div className="post-date">
                {post.date}
              </div>
            </div>
            <div className="post-text">
              {post.body}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostList;
