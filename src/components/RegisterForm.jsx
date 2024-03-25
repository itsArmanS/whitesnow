import React, { useState } from "react";
import "../styles/login.css"

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="register-form" action="">
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
    </form>
  )
}

export default RegisterForm