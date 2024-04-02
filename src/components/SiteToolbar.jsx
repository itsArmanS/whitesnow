import React from "react";
import "../styles/siteToolbar.css"
import CreatePostButton from "./CreatePostButton";
import ProfileButton from "./ProfileButton";
import HomeButton from "./HomeButton";
import LogoutButton from "./LogoutButton";
import SearchButton from "./SearchButton";

function SiteToolbar() {
  return (
    <>
      <div className="site-toolbar">
        <div>
          <HomeButton />
          <ProfileButton />
          <SearchButton />
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </>
  )
}

export default SiteToolbar