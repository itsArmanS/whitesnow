import React, { useContext } from "react";
import "../styles/siteToolbar.css"
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutClick = () => {
    setAuth(false);
    if (!auth) {
      navigate("/");
    }
  }

  return (
    <button className="logout-button" onClick={logoutClick}>LOGOUT</button>
  )
}

export default LogoutButton