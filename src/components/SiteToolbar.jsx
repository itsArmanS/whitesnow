import React from "react";
import "../styles/siteToolbar.css"
import CreatePostButton from "./CreatePostButton";
import ProfileButton from "./ProfileButton";
import HomeButton from "./HomeButton";
import LogoutButton from "./LogoutButton";

function SiteToolbar() {
  return (
    <>
      <div className="site-toolbar">
        <HomeButton />
        <CreatePostButton />
        <ProfileButton />
        <LogoutButton />
      </div>
    </>
  )
}

export default SiteToolbar