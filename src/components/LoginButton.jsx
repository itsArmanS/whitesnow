import React, { useEffect, useContext } from "react";
import "../styles/login.css";

function LoginButton({ currentUser, currentUserID }) {
  const handle = () => {
    console.log(currentUser, currentUserID)
  }

  return (
    <button className="login-button" onClick={handle}>LOGIN</button>
  )
}

export default LoginButton