import React, { useEffect, useState } from "react";
import "../styles/homeLayout.css";
import useFetchDatabase from "./useFetchDatabase";

function NewPostForm(props) {
  const [newPost, setNewPost] = useState([]);
  const [currentID, setCurrentID] = useState(1);
  const [postBody, setPostBody] = useState("");

  const closeNewPostDialog = props.closeNewPostDialog;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setCurrentID(currentID + 1);

    const newPostData = {
      user: "albert",
      profileImage: "/images/default-user-image.png",
      body: postBody,
      date: "04/21",
      id: currentID,
    }

    setCurrentID(currentID + 1);
    setNewPost(newPostData);

    const response = await fetch("http://localhost:3005/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPostData)
    })
    const data = await response.json();
    console.log(data, "new data added")

    closeNewPostDialog();
  };

  const handlePostBodyChange = event => {
    setPostBody(event.target.value);
  };


  useFetchDatabase({ setNewPost });


  return (
    <>
      <form className="new-post-form" action="" onSubmit={handleSubmit}>
        <label htmlFor="newPostBody">Enter your thoughts below</label>
        <textarea
          type="text"
          id="newPostBody"
          value={postBody}
          onChange={handlePostBodyChange}
        />
        <button type="submit">Create</button>
        <button onClick={closeNewPostDialog}>Close</button>
      </form>
    </>
  )
}

export default NewPostForm