import React, { useState, useEffect, useContext } from "react";
import "../styles/profileFeed.css"
import RefreshProfileContext from "./contexts/RefreshProfileContext";

function DeletePostButton({ postID, setRefresh }) {
  const [post, setPost] = useState(null)
  const { setRefreshProfile } = useContext(RefreshProfileContext)

  useEffect(() => {
    const getCurrentPost = async () => {
      try {
        const response = await fetch(`http://localhost:3005/posts?id=${postID}`);
        const data = await response.json();
        const post = data[0];
        if (post) {
          setPost(post);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentPost();
  }, [postID]);

  const deletePost = () => {
    fetch(`http://localhost:3005/posts/${postID}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json', }
    })
      .then(response => {
        if (response) {
          setRefresh(prevRefresh => !prevRefresh);
          setRefreshProfile(true)
        } else {
          console.error()
        }
      })
  }

  return (
    <button className="delete-post-button" onClick={deletePost}></button>
  )
}

export default DeletePostButton