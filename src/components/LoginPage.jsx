import React, { useEffect, useState, useRef } from "react";
import "../styles/login.css"
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function LoginPage() {
  const [loginState, setLoginState] = useState(true);

  const handleLoginSwitch = () => {
    setLoginState(!loginState);
  }

  useEffect(() => {
  }, [loginState])

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-box-header">
          <h1>WHITESNOW</h1>
        </div>
        <div className="login-switcher">
          {loginState ? <Login /> : <Register />}
        </div>
      </div>
      <div className="register-button-section">
        <button onClick={handleLoginSwitch}>Don't have an account?</button>
        <Link to="/forgotpassword">Forgot Password?</Link>
      </div>
    </div>
  )
}

export default LoginPage