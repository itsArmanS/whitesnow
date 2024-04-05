import React from "react";
import "../styles/searchPage.css";
import { useNavigate } from 'react-router-dom';

function SearchPageUserList({ users }) {

  const navigate = useNavigate()

  const sendToProfile = (user) => {
    navigate(`/profile/${user.id}`)
  }

  return (
    <div className="search-page-user-results">
      {
        users.length ?
          users.map((user) => (
            <div className="search-user-result-wrapper" key={user.id} onClick={() => sendToProfile(user)}>
              <div className="search-user-profile-image">
                <img src={user.profile.profileImage} alt="" />
              </div>
              <div className="search-user-card-info" >
                <ul>
                  <li>@{user.username}</li>
                  <li>Flakes • {user.profile.flakes} <img src="/images/snowflake-vote-white.svg" alt="snowflake" /></li>
                </ul>
              </div>
            </div>
          ))
          :
          <div>Loading...</div>
      }
    </div>

  )
}

export default SearchPageUserList