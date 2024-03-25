import React, { useEffect, useState } from "react";
import "../styles/login.css"
import LoginForm from "./LoginForm";
import LoginButton from "./LoginButton";

function Login(props) {
  const [loggingUsername, setLoggingUsername] = useState("");
  const [loggingPassword, setLoggingPassword] = useState("");
  const getErrorMessage = props.getErrorMessage

  const receiveLoginDataFromChild = (user, pass) => {
    setLoggingUsername(user);
    setLoggingPassword(pass);
  }

  useEffect(() => {

  }, [loggingUsername, loggingPassword])

  return (
    <>
      <div className="login-box-form">
        <LoginForm sendLoginDataToParent={receiveLoginDataFromChild} getErrorMessage={getErrorMessage} />
      </div>
    </>

  )
}

export default Login

