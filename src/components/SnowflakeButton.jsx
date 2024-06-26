import React, { useEffect, useState, useContext } from "react";
import "../styles/profileFeed.css"
import RefreshProfileContext from "./contexts/RefreshProfileContext";
import AuthContext from "./contexts/AuthContext";

function SnowflakeButton({ postID }) {
  const [snowflakeCount, setSnowflakeCount] = useState(null);
  const [snowflakeClicked, setSnowflakeClicked] = useState(null);
  const [postData, setPostData] = useState([]);
  const [likedBy, setLikedBy] = useState([]);
  const { setRefreshProfile } = useContext(RefreshProfileContext)
  const { currentUserID } = useContext(AuthContext)

  useEffect(() => {
    const getCurrentPost = async () => {
      try {
        const response = await fetch(`http://localhost:3005/posts?id=${postID}`);
        const data = await response.json();
        const post = data[0];
        if (post) {
          setPostData(post);
          setSnowflakeCount(post.flakes);
          setSnowflakeClicked(post.likedBy && post.likedBy.includes(currentUserID));
          setLikedBy(post.likedBy)
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentPost();
  }, [postID, currentUserID]);

  const updateLikedBy = async (updatedLikedBy, updatedCount) => {
    let updatedData = {
      ...postData,
      likedBy: updatedLikedBy,
      flakes: updatedCount
    }
    await fetch(`http://localhost:3005/posts/${postID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData)
    })
    setSnowflakeClicked(updatedLikedBy.includes(currentUserID))
  }

  const handleSnowflakeClick = async () => {
    const updatedLikedBy = [...likedBy, currentUserID];
    const updatedCount = snowflakeCount + 1;
    setLikedBy(updatedLikedBy);
    setSnowflakeCount(prevCount => prevCount + 1);
    // await updateCurrentPost(updatedCount);
    await updateLikedBy(updatedLikedBy, updatedCount);
    setSnowflakeClicked(true);
    setRefreshProfile(true);
  }

  const handleSnowflakeUnclick = async () => {
    const updatedLikedBy = likedBy.filter(userID => userID !== currentUserID);
    const updatedCount = snowflakeCount - 1;
    setLikedBy(updatedLikedBy);
    setSnowflakeCount(prevCount => prevCount - 1);
    // await updateCurrentPost(updatedCount);
    await updateLikedBy(updatedLikedBy, updatedCount);
    setSnowflakeClicked(false);
    setRefreshProfile(false);
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

export default SnowflakeButton