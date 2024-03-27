import React, { useState, useEffect, useContext } from "react";
import "../styles/login.css"
import LoginButton from "./LoginButton";
import AuthContext from "./AuthContext";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import useGetUserID from "../customHooks/useGetUserID"

function LoginForm({ sendLoginDataToParent, getErrorMessage }) {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentUserID, setCurrentUserID } = useContext(AuthContext);

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

  const userID = useGetUserID(username);


  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = handleLogin();
    if (loginSuccess) {
      setCurrentUser(username);
      setCurrentUserID(userID);
    }
  }



  return (
    <form className="login-form" action="" onSubmit={handleSubmit}>
      <UsernameInput handleUsernameChange={handleUsernameChange} username={username} />
      <PasswordInput handlePasswordChange={handlePasswordChange} password={password} />
      <LoginButton loginSuccess={loginSuccess} auth getErrorMessage={getErrorMessage} currentUser={currentUser} currentUserID={currentUserID} />
    </form>
  )
}

export default LoginForm