import React, { useEffect, useContext } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";


function LoginButton({ loginSuccess, getErrorMessage, currentUser, currentUserID }) {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (loginSuccess) {
      navigate("/home");
      console.log(currentUser, currentUserID)
    }
  }, [auth, navigate])

  const handleClick = () => {
    if (!loginSuccess) {
      getErrorMessage("Incorrect username or password!")
      setTimeout(() => {
        getErrorMessage("")
      }, 2000)
    }
  }


  return (
    <button className="login-button" onClick={handleClick}>LOGIN</button>
  )
}

export default LoginButton