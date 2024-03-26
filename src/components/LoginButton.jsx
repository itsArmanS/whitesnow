import React, { useEffect, useContext } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";


function LoginButton({ loginSuccess, getErrorMessage }) {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  }, [auth, navigate])

  return (
    <button className="login-button"></button>
  )
}

export default LoginButton