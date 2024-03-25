import React from "react";
import "../styles/login.css"
import RegisterForm from "./RegisterForm";
import RegisterButton from "./RegisterButton";

function Register() {
  return (
    <>
      <div className="register-box-form">
        <RegisterForm />
      </div>
      <div className="register-box-buttons">
        <RegisterButton />
      </div>
    </>

  )
}

export default Register