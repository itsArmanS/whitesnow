import React, { useEffect, useState } from "react";
import "../styles/profileLayout.css"
import UserProfilePostsFeed from "./UserProfilePostsFeed"
import UserProfileTopUsers from "./UserProfileTopUsers";

function UserProfile({ userID }) {
  const [profileData, setProfileData] = useState([]);
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const getUserProfile = async () => {
      fetch(`http://localhost:3005/users?id=${userID}`)
        .then(response => response.json())
        .then(data => {
          const user = data[0];
          if (user) {
            setProfileData(user.profile);
            const usernameAt = `@${user.username}`
            setUsername(usernameAt);
          }

        })
        .catch(error => {
          console.log(error)
        })
    }
    getUserProfile()
  }, []);

  return (
    <>
      <div className="user-profile-wrapper">
        <div className="user-profile-information">
          <div className="user-profile-image">
            <img src={profileData.profileImage} alt="gaben" />
          </div>
          <div className="user-profile-name">
            {username}
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
          <UserProfilePostsFeed userID={userID} />
          <UserProfileTopUsers />
        </div>
      </div>
    </>
  )
}

export default UserProfile