import React from "react";
import "../styles/login.css";

function BackToLogin({ handleLoginSwitch }) {

  const handleBackToSigning = () => {
    handleLoginSwitch();
  }

  return (
    <button className="back-to-login-button" onClick={handleBackToSigning}></button>
  )
}

export default BackToLogin