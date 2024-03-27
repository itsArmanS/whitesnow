import React from "react";
import "../styles/login.css"

function EmailInput({ handleEmailChange, email }) {
  return (
    <div >
      <label htmlFor="emailInput">Email</label>
      <input type="email"
        id="emailInput"
        onChange={handleEmailChange}
        value={email}
        placeholder="email"
        required
      />
    </div>
  )
}
export default EmailInput