import React from "react";
import "../styles/siteToolbar.css"
import CreatePostButton from "./CreatePostButton";
import ProfileButton from "./ProfileButton";
import HomeButton from "./HomeButton";

function SiteToolbar() {
  return (
    <>
      <div className="site-toolbar">
        <HomeButton />
        <CreatePostButton />
        <ProfileButton />
      </div>
    </>
  )
}

export default SiteToolbar