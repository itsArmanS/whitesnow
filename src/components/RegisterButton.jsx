import React from "react";
import "../styles/login.css";

function RegisterButton({ checkExistingUsername, handleUserRegister }) {

  const handleClick = async () => {
    await checkExistingUsername();
    handleUserRegister();
  };

  return (
    <button className="register-button" onClick={handleClick}>REGISTER</button>
  )
}

export default RegisterButton