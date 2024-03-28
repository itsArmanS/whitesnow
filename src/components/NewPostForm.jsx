import React, { useState, useContext } from "react";
import "../styles/homeLayout.css";
import { v4 as uuid } from 'uuid';
import AuthContext from "./AuthContext";

function NewPostForm({ toggleNewPostDialog, handleRefreshPosts }) {
  const [postBody, setPostBody] = useState("");
  const { currentUserID } = useContext(AuthContext)

  function generatePostID() {
    const id = uuid();
    return id.slice(0, 10);
  }
  let postID = generatePostID();

  let todaysDate = new Date(),
    fullDate = (todaysDate.getMonth() + 1) + '-' + todaysDate.getDate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (postBody.length <= 10) {
      alert("Signed as has to be over 5 characters / Post has to have over 10 characters")
    } else {
      const newPostData = {
        profileImage: "/images/default-user-image.png",
        body: postBody,
        date: fullDate,
        postID: postID,
        userID: currentUserID
      }

      const response = await fetch("http://localhost:3005/posts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPostData)
      })
      if (response.ok) {
        console.log("New post added successfully");
        // handleRefreshPosts();
        toggleNewPostDialog();
      } else {
        console.error("Failed to add new post");
      }
    }

  };

  const handlePostBodyChange = (e) => {
    setPostBody(e.target.value);
  };

  return (
    <>
      <form className="new-post-form" action="POST" onSubmit={handleSubmit}>
        <label htmlFor="newPostBody">Enter your thoughts below</label>
        <textarea
          type="text"
          id="newPostBody"
          value={postBody}
          onChange={handlePostBodyChange}
        />
        <div className="form-button-wrapper">
          <button type="submit">Create</button>
          <button onClick={toggleNewPostDialog}>Close</button>
        </div>
      </form>
    </>
  )
}

export default NewPostForm