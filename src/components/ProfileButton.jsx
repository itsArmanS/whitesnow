import React from "react";
import { Link } from "react-router-dom";

function ProfileButton() {


  return (
    <button className="profile-button">
      <Link to='/profile' className="profile-link">My Profile</Link >
    </button>
  )
}

export default ProfileButton