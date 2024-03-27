import React from "react";
import "../styles/login.css"
import RegisterForm from "./RegisterForm";
import BackToLogin from "./BackToLogin";

function Register({ handleLoginSwitch, getErrorMessage }) {
  return (
    <>
      <div className="register-box-form">
        <RegisterForm getErrorMessage={getErrorMessage} />
      </div>
      <div className="register-box-buttons">
        <BackToLogin handleLoginSwitch={handleLoginSwitch} />
      </div>
    </>

  )
}

export default Register