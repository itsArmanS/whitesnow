import React from "react";
import "../styles/login.css"

function UsernameInput({ handleUsernameChange, username }) {
  return (
    <div >
      <label htmlFor="usernameInput">Username</label>
      <input type="text"
        id="usernameInput"
        onChange={handleUsernameChange}
        value={username}
        placeholder="username"
        required
      />
    </div>
  )
}
export default UsernameInput