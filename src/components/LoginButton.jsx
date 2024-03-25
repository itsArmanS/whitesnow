import React, { useContext, useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

function LoginButton({ onLogin }) {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleClick = () => {
    onLogin();
    if (auth) {
      navigate("/home");
    }
  }

  return (
    <button className="login-button" onClick={handleClick}></button>
  )
}

export default LoginButton