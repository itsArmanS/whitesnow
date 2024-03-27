import React from "react";
import "../styles/login.css";

function RegisterButton({ handleUserRegister }) {

  return (
    <button className="register-button" onClick={handleUserRegister}>REGISTER</button>
  )
}

export default RegisterButton