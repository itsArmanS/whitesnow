import React, { useEffect, useState } from "react";
import "../styles/profileFeed.css"

function HomeSnowflakeButton({ postID }) {
  const [snowflakeCount, setSnowflakeCount] = useState(null);
  const [snowflakeClicked, setSnowflakeClicked] = useState(false);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getCurrentPost = async () => {
      try {
        const response = await fetch(`http://localhost:3005/dummies?id=${postID}`);
        const data = await response.json();
        const post = data[0];
        if (post) {
          setPostData(post);
          setSnowflakeCount(post.flakes);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentPost();
  }, [postID]);

  const updateCurrentPost = async (updatedCount) => {
    let updatedFlakeCount = { ...postData, flakes: updatedCount }
    try {
      const response = await fetch(`http://localhost:3005/dummies/${postID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedFlakeCount)
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSnowflakeClick = async () => {
    const updatedCount = snowflakeCount + 1;
    setSnowflakeClicked(true);
    setSnowflakeCount(prevCount => prevCount += 1)
    updateCurrentPost(updatedCount);

  }

  const handleSnowflakeUnclick = () => {
    const updatedCount = snowflakeCount - 1;
    setSnowflakeCount(prevCount => prevCount -= 1);
    setSnowflakeClicked(false);
    updateCurrentPost(updatedCount);

  }

  return (
    <>
      {snowflakeClicked ?
        <button className="snowflakeButtonClicked" onClick={handleSnowflakeUnclick}></button>
        : < button className="snowflakeButton" onClick={handleSnowflakeClick}></button >}
      <span>{snowflakeCount}</span>
    </>
  )
}

export default HomeSnowflakeButton