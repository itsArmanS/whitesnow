import React from "react";
import "../styles/siteToolbar.css"
import CreatePostButton from "./CreatePostButton";
import ProfileButton from "./ProfileButton";
import HomeButton from "./HomeButton";
import LogoutButton from "./LogoutButton";

function SiteToolbar({ refreshPosts }) {
  return (
    <>
      <div className="site-toolbar">
        <HomeButton />
        <CreatePostButton refreshPosts={refreshPosts} />
        <ProfileButton />
        <LogoutButton />
      </div>
    </>
  )
}

export default SiteToolbar