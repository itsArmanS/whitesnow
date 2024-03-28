import React, { useEffect, useContext } from "react";
import "../styles/profileLayout.css"
import MainFeed from "./MainFeed";
import AuthContext from "./AuthContext";
import useGetUserProfile from "../customHooks/useGetUserProfile";

function UserProfile() {
  const { currentUserID } = useContext(AuthContext)

  const x = useGetUserProfile(currentUserID)


  useEffect(() => {
    console.log(x)
  })
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