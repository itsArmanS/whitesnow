import React, { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfileButton() {
  const { auth, currentUserID } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileButtonClick = () => {
    auth ? (
      navigate(`/profile/${currentUserID}`)
    ) : (
      navigate("/")
    )
  }


  return (
    <button className="profile-button" onClick={handleProfileButtonClick} >PROFILE</button>
  )
}

export default ProfileButton