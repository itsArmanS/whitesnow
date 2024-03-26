import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"

function LoginAlternateOptions({ handleLoginSwitch }) {
  return (
    <div className="register-button-section">
      <button onClick={handleLoginSwitch}>Don't have an account?</button>
      <Link to="/forgotpassword">Forgot Password?</Link>
    </div>
  )
}

export default LoginAlternateOptions