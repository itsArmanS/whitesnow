import React from "react";
import CreatePostButton from "./CreatePostButton";
import "../styles/siteToolbar.css"
import ProfileButton from "./ProfileButton";

function SiteToolbar() {
  return (
    <>
      <div className="site-toolbar">
        <CreatePostButton />
        <ProfileButton />
      </div>
    </>
  )
}

export default SiteToolbar