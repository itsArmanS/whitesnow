import React from "react";
import "../styles/login.css"

function LoginErrorMessage(props) {
  return (
    <div className="login-error-message">
      {props.message}
    </div>
  )
}

export default LoginErrorMessage