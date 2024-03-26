import React from "react";
import "../styles/login.css"
import RegisterForm from "./RegisterForm";
import RegisterButton from "./RegisterButton";
import BackToLogin from "./BackToLogin";

function Register({ handleLoginSwitch }) {
  return (
    <>
      <div className="register-box-form">
        <RegisterForm />
      </div>
      <div className="register-box-buttons">
        <RegisterButton />
        <BackToLogin handleLoginSwitch={handleLoginSwitch} />
      </div>
    </>

  )
}

export default Register