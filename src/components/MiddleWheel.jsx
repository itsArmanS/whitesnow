import React, { useEffect, useRef, useState } from "react";
import "../styles/postWheels.css"
import HomeSnowflakeButton from "./HomeSnowflakeButton";

function MiddleWheel() {
  const [posts, setPosts] = useState(null);
  const wheelRef = useRef(null)

  useEffect(() => {
    const fetchDummyPosts = async () => {
      const response = await fetch("http://localhost:3005/posts");
      const data = await response.json();
      setPosts(data)
    }
    fetchDummyPosts();
  }, [])

  const handleMouseEnter = () => {
    wheelRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    wheelRef.current.style.animationPlayState = "running";
  };

  return (
    <>
      {
        posts ?
          <div className="middle-wheel" ref={wheelRef}>
            {posts.map((post) => (
              <div className="wheel-post-body" key={post.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="post-user-data">
                  <div className="post-user">
                    <div className="profile-image">
                      <img src={post.profileImage} alt="" />
                    </div>
                    <div className="user-username">
                      {` • @${post.username} • `}
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
                  <HomeSnowflakeButton postID={post.id} />
                </div>
              </div>
            ))}
            {posts.map((post) => (
              <div className="wheel-post-body" key={post.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="post-user-data">
                  <div className="post-user">
                    <div className="profile-image">
                      <img src={post.profileImage} alt="" />
                    </div>
                    <div className="user-username">
                      {` • @${post.username} • `}
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
                  <HomeSnowflakeButton postID={post.id} />
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