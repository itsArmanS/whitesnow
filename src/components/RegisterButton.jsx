import React from "react";
import "../styles/login.css";

function RegisterButton({ checkExistingUsername, handleUserRegister }) {
  const backToLogin = document.querySelector(".back-to-login-button")

  const handleClick = async () => {
    await checkExistingUsername();
    await handleUserRegister();
    backToLogin.click()
  };

  return (
    <button className="register-button" onClick={handleClick}>REGISTER</button>
  )
}

export default RegisterButton