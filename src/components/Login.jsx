import React from "react";
import "../styles/login.css"
import LoginForm from "./LoginForm";

function Login() {

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-box-header">
          <h1>WHITESNOW</h1>
        </div>
        <div className="login-box-form">
          <LoginForm />
        </div>
        <div className="login-box-buttons">

        </div>
      </div>
    </div>
  )
}

export default Login