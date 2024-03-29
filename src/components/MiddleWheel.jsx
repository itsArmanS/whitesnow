import React, { useEffect, useState } from "react";
import "../styles/postWheels.css"
import SnowflakeButton from "./SnowflakeButton";

function MiddleWheel() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchDummyPosts = async () => {
      const response = await fetch("http://localhost:3005/dummies");
      const data = await response.json();
      setPosts(data)
    }
    fetchDummyPosts();
  }, [])

  return (
    <>
      {
        posts ?
          <div className="middle-wheel">
            {posts.map((post) => (
              <div className="post-body" key={post.id}>
                <div className="post-user-data">
                  <div className="post-user">
                    <div className="profile-image">
                      <img src={post.profileImage} alt="" />
                    </div>
                    <div className="user-username">
                      {`@${post.username} • `}
                    </div>
                    <div className="post-date">
                      {post.date}
                    </div>
                  </div>
                  <div className="post-text">
                    {post.body}
                  </div>
                </div>
                <div className="post-user-buttons">
                  <SnowflakeButton postID={post.id} />
                </div>
              </div>
            ))}
          </div>
          :
          <div className="loading-div">Loading...</div>
      }

    </>

  )
}


export default MiddleWheel