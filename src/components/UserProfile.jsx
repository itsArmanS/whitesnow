import React, { useEffect, useContext, useState } from "react";
import "../styles/profileLayout.css"
import MainFeed from "./MainFeed";
import AuthContext from "./AuthContext";

function UserProfile() {
  const { currentUserID } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      console.log(currentUserID)
      fetch(`http://localhost:3005/users?id=${currentUserID}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          const user = data[0];
          if (user) {
            setProfileData(user.profile);
          }
          console.log(profileData)

        })
        .catch(error => {
          console.log(error)
        })
    }
    getUserProfile()
  }, []);

  console.log(profileData)

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
            {profileData && (
              <>
                <li>Country: {profileData.country}</li>
                <li>Hobby: {profileData.hobby}</li>
                <li>Flakes: {profileData.flakes}</li>
                <li>Emoji: {profileData.emoji}</li>
                <li>User Since: {profileData.userSince}</li>
              </>
            )}
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