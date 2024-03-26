import React, { useState, useEffect, useContext } from "react";
import "../styles/login.css"
import LoginButton from "./LoginButton";
import AuthContext from "./AuthContext";

function LoginForm({ sendLoginDataToParent, getErrorMessage }) {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3005/users");
        const returnedData = await response.json();
        setData(returnedData);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [auth]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  sendLoginDataToParent(username, password);

  const handleLogin = async () => {
    if (data !== null) {
      const foundUser = data.find(item => item.username === username && item.password === password);
      if (foundUser) {
        setAuth(true);
        setLoginSuccess(true);
      } else {
        setLoginSuccess(false);
      }
    } else {
      console.log("null")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = handleLogin();
    if (!loginSuccess) {
      getErrorMessage("Wrong username or password");
    }
  }

  return (
    <form className="login-form" action="" onSubmit={handleSubmit}>
      <div >
        <label htmlFor="usernameInput" id="usernameLabel">Username</label>
        <input type="text"
          id="usernameInput"
          onChange={handleUsernameChange}
          value={username}
          placeholder="username"
        />
      </div>
      <div>
        <label htmlFor="passwordInput" id="passwordLabel">Password</label>
        <input type="password"
          id="passwordInput"
          onChange={handlePasswordChange}
          value={password}
          placeholder="password"
        />
      </div>
      <LoginButton loginSuccess={loginSuccess} auth getErrorMessage={getErrorMessage} />
    </form>
  )
}

export default LoginForm