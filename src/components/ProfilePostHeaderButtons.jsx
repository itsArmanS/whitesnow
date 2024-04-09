import React from "react";
import "../styles/profileLayout.css"
import "../styles/profileFeed.css"
import CreatePostButton from "./CreatePostButton";
import SettingsButton from "./SettingsButton";

function ProfilePostHeaderButtons({ currentUserID, userID, userData }) {

  return (
    <div className="profile-header-buttons">
      <div className="general-profile-header-buttons">
        <button className="profile-flakes">FLAKES</button>
        <button className="profile-stars">STARS</button>
        <button className="profile-followers">FOLLOWERS</button>
      </div>
      <div className="additional-profile-header-buttons">
        {userID === currentUserID ?
          <>
            <CreatePostButton />
            <SettingsButton userData={userData} />
          </>
          :
          null
        }
      </div>
    </div>
  )
}

export default ProfilePostHeaderButtons