import React from "react";
import "../styles/homePanels.css"
import "../styles/mainFeed.css"
import SnowflakeButton from "./SnowflakeButton";

function PostList(props) {
  const posts = props.posts;

  return (
    <>
      {posts.map((post) => (
        <div className="post-body" key={post.id}>
          <div className="post-user-buttons">
            <SnowflakeButton />
          </div>
          <div className="post-user-data">
            <div className="post-user">
              <div className="profile-image">
                <img src={post.profileImage} alt="" />
              </div>
              <div className="user-username">
                {`@${post.user}`}
              </div>
            </div>
            <div className="post-text">
              {post.body}
            </div>
            <div className="post-date">
              {post.date}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostList