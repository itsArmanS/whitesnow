import React from "react";
import "../styles/profileLayout.css"
import MainFeed from "./MainFeed";

function UserProfile() {
  return (
    <>
      <div className="user-profile-wrapper">
        <div className="user-profile-information">
          <div className="user-profile-image">
            <img src="/images/gabenpfp.jpg" alt="gaben" />
          </div>
          <div className="user-profile-name">
            @gaben
          </div>
          <ul>
            <li>Country: </li>
            <li>Hobby: </li>
            <li>Flake Count: </li>
            <li>Emoji: </li>
            <li>Mood: </li>
            <li>User Since: </li>
          </ul>
        </div>
        <div className="user-profile-posts">
          <MainFeed />
        </div>
      </div>
    </>
  )
}

export default UserProfile