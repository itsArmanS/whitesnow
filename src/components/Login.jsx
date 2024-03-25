import React, { useState } from "react";
import "../styles/login.css"
import LoginForm from "./LoginForm";
import LoginButton from "./LoginButton";

function Login() {
  const [logginUsername, setLoggingUsername] = useState("");
  const [loggingPassword, setLoggingPassword] = useState("");

  const receiveLoginDataFromChild = (user, pass) => {
    setLoggingUsername(user);
    setLoggingPassword(pass);
  }

  return (
    <>
      <div className="login-box-form">
        <LoginForm sendLoginDataToParent={receiveLoginDataFromChild} />
      </div>
      <div className="login-box-buttons">
        <LoginButton username={logginUsername} password={loggingPassword} />
      </div>
    </>

  )
}

export default Login

