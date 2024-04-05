import React from "react";
import "../styles/siteToolbar.css"
import ProfileButton from "./ProfileButton";
import HomeButton from "./HomeButton";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import SettingsButton from "./SettingsButton";

function SiteToolbar({ page }) {
  const currentPage = page
  return (
    <>
      <div className="site-toolbar">
        <div className="main-toolbar-buttons">
          <HomeButton />
          <ProfileButton />
        </div>
        {currentPage === "home" ? <SearchInput page={currentPage} /> : <h1 className="search-page-space"></h1>}
        <div className="logout-toolbar-buttons">
          <LogoutButton />
          <SettingsButton />
        </div>
      </div>
    </>
  )
}

export default SiteToolbar