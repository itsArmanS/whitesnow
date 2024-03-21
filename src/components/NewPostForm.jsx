import React, { useState } from "react";
import "../styles/homeLayout.css";

function NewPostForm(props) {
  const [currentID, setCurrentID] = useState(1);
  const [postBody, setPostBody] = useState("");

  const closeNewPostDialog = props.closeNewPostDialog;
  const addNewPost = props.addNewPost;

  const handleInputChange = (event) => {
    setPostBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = {
      user: "albert",
      profileImage: "/images/default-user-image.png",
      body: postBody,
      date: "04/21",
      id: currentID,
    }

    setCurrentID(currentID + 1);
    addNewPost(postData);
    closeNewPostDialog();
  };

  return (
    <>
      <form className="new-post-form" action="" onSubmit={handleSubmit}>
        <label htmlFor="newPostBody">Enter your thoughts below</label>
        <textarea
          type="text"
          id="newPostBody"
          value={postBody}
          onChange={handleInputChange}
        />
        <button type="submit">Create</button>
        <button onClick={closeNewPostDialog}>Close</button>
      </form>
    </>
  )
}

export default NewPostForm