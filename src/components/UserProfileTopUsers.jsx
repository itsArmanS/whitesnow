import React from "react";
import "../styles/profileTopUsers.css"
import GetTopUsers from "./GetTopUsers";

function UserProfileTopUsers() {
  return (
    <div className="top-users-wrapper">
      <div className="top-users-header">
        <h1>TOP FLAKE COUNT</h1>
      </div>
      <div className="top-users-list">
        <GetTopUsers />
      </div>
    </div>
  )
}

export default UserProfileTopUsers