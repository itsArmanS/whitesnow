import React from "react";
import "../styles/login.css"

function PasswordInput({ handlePasswordChange, password }) {
  return (
    <div>
      <label htmlFor="passwordInput">Password</label>
      <input type="password"
        id="passwordInput"
        onChange={handlePasswordChange}
        value={password}
        placeholder="password"
        required
      />
    </div>
  )
}
export default PasswordInput