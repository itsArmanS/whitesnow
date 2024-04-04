import React from "react";
import "../styles/profileLayout.css"
import SiteToolbar from "./SiteToolbar";
import UserProfile from "./UserProfile";
import { RefreshContextProvider } from "./RefreshContext";

function ProfileLayout() {

  return (
    <RefreshContextProvider>
      <div className="profile-layout">
        <SiteToolbar page={"home"} />
        <div className="profile-banner">

        </div>
        <UserProfile />
      </div>
    </RefreshContextProvider>

  )
}

export default ProfileLayout