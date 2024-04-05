import React from "react";
import "../styles/profileLayout.css"
import "../styles/profileFeed.css"
import CreatePostButton from "./CreatePostButton";


function ProfilePostHeaderButtons({ currentUserID, userID, profileData }) {

  return (
    <div className="profile-header-buttons">
      <div>
        <button>FLAKES</button>
        <button>STARS</button>
        <button>FOLLOWERS</button>
      </div>
      <div>
        {userID === currentUserID ?
          <CreatePostButton />
          :
          null
        }
      </div>
    </div>
  )
}

export default ProfilePostHeaderButtons