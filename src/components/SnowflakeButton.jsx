import React, { useEffect, useState, useContext } from "react";
import "../styles/profileFeed.css"
import RefreshProfileContext from "./contexts/RefreshProfileContext";
import AuthContext from "./contexts/AuthContext";

function SnowflakeButton({ postID }) {
  const [snowflakeCount, setSnowflakeCount] = useState(null);
  const [snowflakeClicked, setSnowflakeClicked] = useState(false);
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
          setLikedBy(post.likedBy)
          setPostData(post);
          setSnowflakeCount(post.flakes);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentPost();
  }, [postID]);

  useEffect(() => {
    const updateLikedBy = async () => {
      let updatedLikedBy = {
        ...postData,
        likedBy: likedBy
      }

      await fetch(`http://localhost:3005/posts/${postID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLikedBy)
      })
    }
    updateLikedBy();

  }, [snowflakeClicked])


  const updateCurrentPost = async (updatedCount) => {
    let updatedFlakeCount = {
      ...postData,
      flakes: updatedCount,
    }

    try {
      const response = await fetch(`http://localhost:3005/posts/${postID}`, {
        method: "PATCH",
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
    setSnowflakeClicked(true);
    setLikedBy(prevLikedBy => [...prevLikedBy, currentUserID])
    const updatedCount = snowflakeCount + 1;
    setSnowflakeCount(prevCount => prevCount += 1)
    await updateCurrentPost(updatedCount);
    setRefreshProfile(true)
  }

  const handleSnowflakeUnclick = async () => {
    setSnowflakeClicked(false);
    setLikedBy(prevLikedBy => prevLikedBy.filter(userID => userID !== currentUserID))
    const updatedCount = snowflakeCount - 1;
    setSnowflakeCount(prevCount => prevCount -= 1);
    await updateCurrentPost(updatedCount);
    setRefreshProfile(false)
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