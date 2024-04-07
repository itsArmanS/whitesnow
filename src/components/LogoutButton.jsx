import React, { useContext, useEffect } from "react";
import "../styles/siteToolbar.css"
import AuthContext from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutClick = () => {
    setAuth(false);
    navigate("/login")
  }

  return (
    <button className="logout-button" onClick={logoutClick}>LOGOUT</button>
  )
}

export default LogoutButton