import React, { useState } from "react";
import "../styles/homeLayout.css";
import shortid from "shortid";

function NewPostForm({ closeNewPostDialog, handleRefreshPosts }) {
  const [newPost, setNewPost] = useState([]);
  const [postBody, setPostBody] = useState("");
  const [signedAs, setSignedAs] = useState("");

  let todaysDate = new Date(),
    fullDate = (todaysDate.getMonth() + 1) + '-' + todaysDate.getDate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (postBody.length <= 10 && signedAs <= 5) {
      alert("Signed as has to be over 5 characters / Post has to have over 10 characters")
    } else {
      const newPostData = {
        user: signedAs,
        profileImage: "/images/default-user-image.png",
        body: postBody,
        date: fullDate,
        id: shortid.generate(),
      }

      setNewPost(newPostData);

      const response = await fetch("http://localhost:3005/posts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPostData)
      })
      if (response.ok) {
        console.log("New post added successfully");
        handleRefreshPosts();
        closeNewPostDialog();
      } else {
        console.error("Failed to add new post");
      }
    }

  };

  const handlePostBodyChange = (e) => {
    setPostBody(e.target.value);
  };

  const handleSignedAsChange = (e) => {
    setSignedAs(e.target.value);
  }

  return (
    <>
      <form className="new-post-form" action="POST" onSubmit={handleSubmit}>
        <label htmlFor="sign-as-input">Sign as?</label>
        <input type="text"
          className="sign-as-input"
          id="sign-as-input"
          value={signedAs}
          onChange={handleSignedAsChange}
        />
        <label htmlFor="newPostBody">Enter your thoughts below</label>
        <textarea
          type="text"
          id="newPostBody"
          value={postBody}
          onChange={handlePostBodyChange}
        />
        <div className="form-button-wrapper">
          <button type="submit">Create</button>
          <button onClick={closeNewPostDialog}>Close</button>
        </div>
      </form>
    </>
  )
}

export default NewPostForm