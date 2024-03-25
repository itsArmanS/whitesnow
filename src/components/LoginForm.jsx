import React, { useState, useEffect, useContext } from "react";
import "../styles/login.css"
import LoginButton from "./LoginButton";
import AuthContext from "./AuthContext";

function LoginForm({ sendLoginDataToParent, getErrorMessage }) {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
  }, [data, auth, username, password])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  sendLoginDataToParent(username, password);

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

  const handleLogin = async () => {
    if (data !== null) {
      data.forEach(item => {
        if (item.username === username && item.password === password) {
          setAuth(true);
          console.log(auth)
        } else {
          getErrorMessage("Incorrect Data")
        }

      });
    } else {
      console.log("stopped")
    }
  }

  const preventDefault = (e) => {
    e.preventDefault();
  }

  return (
    <form className="login-form" action="" onSubmit={preventDefault}>
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
      <LoginButton onLogin={handleLogin} />
    </form>
  )
}

export default LoginForm