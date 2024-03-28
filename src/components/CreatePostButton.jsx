import React, { useState } from "react";
import "../styles/homeLayout.css"
import NewPostForm from "./NewPostForm";

function CreatePostButton({ handleRefreshPosts }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNewPostDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="open-create-post-dialog" onClick={toggleNewPostDialog}>CREATE FLAKE +</button>
      {isOpen && (
        <dialog className="new-post-dialog" open>
          <NewPostForm toggleNewPostDialog={toggleNewPostDialog} handleRefreshPosts={handleRefreshPosts} />
        </dialog>
      )}
    </>
  )
}

export default CreatePostButton