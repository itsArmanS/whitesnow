import React, { useState } from "react";
import "../styles/login.css"

function LoginForm({ sendLoginDataToParent }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  sendLoginDataToParent(username, password);

  return (
    <form className="login-form" action="">
      <div >
        <label htmlFor="usernameInput">Username</label>
        <input type="text"
          id="usernameInput"
          onChange={handleUsernameChange}
          value={username}
          placeholder="username"
        />
      </div>
      <div>
        <label htmlFor="passwordInput">Password</label>
        <input type="password"
          id="passwordInput"
          onChange={handlePasswordChange}
          value={password}
          placeholder="password"
        />
      </div>
    </form>
  )
}

export default LoginForm