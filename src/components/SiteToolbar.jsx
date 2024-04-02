import React from "react";
import "../styles/siteToolbar.css"
import ProfileButton from "./ProfileButton";
import HomeButton from "./HomeButton";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

function SiteToolbar() {
  return (
    <>
      <div className="site-toolbar">
        <div className="main-toolbar-buttons">
          <HomeButton />
          <ProfileButton />
        </div>
        <SearchInput />
        <div className="logout-toolbar-buttons">
          <LogoutButton />
        </div>
      </div>
    </>
  )
}

export default SiteToolbar