import React from "react";
import "../styles/searchPage.css"

function SearchPageUserList({ users }) {

  return (
    <div className="search-page-user-results">
      {
        users.length ?
          users.map((user) => (
            <div className="search-user-result-wrapper" key={user.id}>
              <div className="search-user-profile-image">
                <img src={user.profile.profileImage} alt="" />
              </div>
              <div className="search-user-card-info">
                <ul>
                  <li>@{user.username}</li>
                  <li>Flakes • {user.profile.flakes} <img src="/images/snowflake-vote-white.svg" alt="" /></li>
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