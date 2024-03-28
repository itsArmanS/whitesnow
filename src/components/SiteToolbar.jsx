import React from "react";
import "../styles/siteToolbar.css"
import CreatePostButton from "./CreatePostButton";
import ProfileButton from "./ProfileButton";
import HomeButton from "./HomeButton";
import LogoutButton from "./LogoutButton";

function SiteToolbar({ handleRefreshPosts }) {
  return (
    <>
      <div className="site-toolbar">
        <HomeButton />
        <CreatePostButton handleRefreshPosts={handleRefreshPosts} />
        <ProfileButton />
        <LogoutButton />
      </div>
    </>
  )
}

export default SiteToolbar