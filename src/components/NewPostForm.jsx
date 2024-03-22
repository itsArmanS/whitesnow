import React, { useEffect, useState } from "react";
import "../styles/homeLayout.css";
import PostList from "./PostList";
import { v4 as uuid } from "uuid";

function NewPostForm({ closeNewPostDialog, handleRefreshPosts }) {
  const [newPost, setNewPost] = useState([]);
  const [postBody, setPostBody] = useState("");
  const [signedAs, setSignedAs] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPostData = {
      user: signedAs,
      profileImage: "/images/default-user-image.png",
      body: postBody,
      date: "04/21",
      id: uuid(),
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
        <label htmlFor="newPostBody">Enter your thoughts below</label>
        <textarea
          type="text"
          id="newPostBody"
          value={postBody}
          onChange={handlePostBodyChange}
        />
        <label htmlFor=""></label>
        <input type="text"
          className="sign-as-input"
          id="sign-as-input"
          value={signedAs}
          onChange={handleSignedAsChange}
        />
        <button type="submit">Create</button>
        <button onClick={closeNewPostDialog}>Close</button>
      </form>
    </>
  )
}

export default NewPostForm