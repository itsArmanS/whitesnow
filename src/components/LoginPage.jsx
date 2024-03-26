import React, { useEffect, useState, useRef } from "react";
import "../styles/login.css"
import Register from "./Register";
import Login from "./Login";
import LoginErrorMessage from "./LoginErrorMessage";

function LoginPage() {
  const [loginState, setLoginState] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getErrorMessage = (message) => {
    setErrorMessage(message)
  }

  const handleLoginSwitch = () => {
    setLoginState(!loginState);
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-box-header">
          <h1>WHITESNOW</h1>
        </div>
        <LoginErrorMessage message={errorMessage} />
        <div className="login-switcher">
          {loginState ? <Login getErrorMessage={getErrorMessage} handleLoginSwitch={handleLoginSwitch} /> : <Register handleLoginSwitch={handleLoginSwitch} />}
        </div>
      </div>
    </div>
  )
}

export default LoginPage