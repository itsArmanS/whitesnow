import React, { useState } from "react";
import "../styles/profileFeed.css"
import NewPostForm from "./NewPostForm";

function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNewPostDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="open-create-post-dialog" onClick={toggleNewPostDialog}>NEW FLAKE+</button>
      {isOpen && (
        <dialog className="new-post-dialog" open>
          <NewPostForm toggleNewPostDialog={toggleNewPostDialog} />
        </dialog>
      )}
    </>
  )
}

export default CreatePostButton