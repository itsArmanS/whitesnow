import React, { useState } from "react";
import "../styles/login.css"
import LoginForm from "./LoginForm";
import LoginButton from "./LoginButton";

function Login() {
  return (
    <>
      <div className="login-box-form">
        <LoginForm />
      </div>
      <div className="login-box-buttons">
        <LoginButton />
      </div>
    </>

  )
}

export default Login

