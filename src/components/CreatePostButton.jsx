import React, { useState } from "react";
import "../styles/homeLayout.css"
import NewPostForm from "./NewPostForm";

function CreatePostButton({ handleRefreshPosts }) {
  const [isOpen, setIsOpen] = useState(false);

  const openNewPostDialog = () => {
    setIsOpen(true);
  };

  const closeNewPostDialog = () => {
    setIsOpen(false);
  };


  return (
    <>
      <button className="open-create-post-dialog" onClick={openNewPostDialog}>Create Flake +</button>
      {isOpen && (
        <dialog className="new-post-dialog" open>
          <NewPostForm closeNewPostDialog={closeNewPostDialog} handleRefreshPosts={handleRefreshPosts} />
        </dialog>
      )}
    </>
  )
}

export default CreatePostButton