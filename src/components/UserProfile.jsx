import React, { useContext, useEffect, useState } from "react";
import "../styles/profileLayout.css"
import UserProfilePostsFeed from "./UserProfilePostsFeed"
import UserProfileTopUsers from "./UserProfileTopUsers";
import RefreshProfileContext from "./contexts/RefreshProfileContext"

function UserProfile({ userID }) {
  const { refreshProfile } = useContext(RefreshProfileContext)
  const [profileData, setProfileData] = useState([]);
  const [userData, setUserData] = useState([])
  const [username, setUsername] = useState(null)
  let [userFlakes, setUserFlakes] = useState(0)

  useEffect(() => {
    const getUserProfile = async () => {
      fetch(`http://localhost:3005/users?id=${userID}`)
        .then(response => response.json())
        .then(data => {
          const user = data[0];
          if (user) {
            setUserData(user)
            setProfileData(user.profile);
            const usernameAt = `@${user.username}`
            setUsername(usernameAt);
          }

        })
        .catch(error => {
          console.log(error)
        })
    }

    const getUserFlakeCount = () => {
      fetch(`http://localhost:3005/posts?userID=${userID}`)
        .then(response => response.json())
        .then(data => {
          let flakeCount = 0
          data.forEach(post => {
            setUserFlakes(flakeCount += post.flakes)
          })
        })
        .catch(error => {
          console.log(error)
        })
    }

    const updateUserFlakeCount = () => {
      const updatedProfileFlakes = {
        ...userData,
        ...userData.profile,
        flakes: userFlakes
      }

      fetch(`http://localhost:3005/users/${userID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProfileFlakes)
      })


    }

    getUserProfile()
    getUserFlakeCount()
    updateUserFlakeCount()

  }, [refreshProfile]);

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
                <li>Flakes: {userFlakes}</li>
                <li>Emoji: {profileData.emoji}</li>
                <li>User Since: {profileData.userSince}</li>
              </>
            )}
          </ul>
        </div>
        <div className="user-profile-posts">
          <UserProfilePostsFeed userID={userID} userData={userData} />
          <UserProfileTopUsers />
        </div>
      </div>
    </>
  )
}

export default UserProfile