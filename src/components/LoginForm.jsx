import React, { useState } from "react";
import "../styles/login.css"

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="login-form" action="">
      <div >
        <input type="text"
          id="usernameInput"
          onChange={handleUsernameChange}
          value={username}
          placeholder="username"
        />
      </div>
      <div>
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