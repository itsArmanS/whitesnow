import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

function ProfileButton() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileButtonClick = () => {
    auth ? (
      navigate("/profile")
    ) : (
      navigate("/")
    )
  }


  return (
    <button className="profile-button" onClick={handleProfileButtonClick} >PROFILE</button>
  )
}

export default ProfileButton