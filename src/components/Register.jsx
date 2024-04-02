import React from "react";
import "../styles/login.css"
import RegisterForm from "./RegisterForm";
import BackToLogin from "./BackToLogin";

function Register({ handleLoginSwitch }) {
  return (
    <>
      <div className="register-box-form">
        <RegisterForm handleLoginSwitch={handleLoginSwitch} />
      </div>
      <div className="register-box-buttons">
        <BackToLogin handleLoginSwitch={handleLoginSwitch} />
      </div>
    </>

  )
}

export default Register