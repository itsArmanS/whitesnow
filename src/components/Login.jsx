import React, { useEffect, useState } from "react";
import "../styles/login.css"
import LoginForm from "./LoginForm";
import LoginAlternateOptions from "./LoginAlternateOptions"

function Login(props) {
  const [loggingUsername, setLoggingUsername] = useState("");
  const [loggingPassword, setLoggingPassword] = useState("");
  const getErrorMessage = props.getErrorMessage;
  const handleLoginSwitch = props.handleLoginSwitch;

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
        <LoginAlternateOptions handleLoginSwitch={handleLoginSwitch} />
      </div>
    </>

  )
}

export default Login

