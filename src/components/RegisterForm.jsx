import React, { useState } from "react";
import "../styles/login.css"
import UsernameInput from "./UsernameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import RegisterButton from "./RegisterButton";
import { v4 as uuid } from 'uuid';

function RegisterForm({ getErrorMessage }) {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function checkExistingUsername() {
    try {
      const response = await fetch("http://localhost:3005/users");
      const returnData = await response.json();
      const foundUser = returnData.find(item => item.username === username || item.email === email);
      setUserExists(!!foundUser);

      return !!foundUser;
    } catch (error) {
      console.error("Error checking existing username:", error);
      return false;
    }
  }

  const handleUserRegister = async () => {
    const userExists = await checkExistingUsername();
    if (!userExists) {
      const userData = {
        id: uuid(),
        username: username,
        password: password,
        email: email
      };

      try {
        const response = await fetch("http://localhost:3005/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const data = await response.json();
        console.log("Registration successful", data);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      getErrorMessage("User already exists");
    }

  }

  const preventDefault = (e) => {
    e.preventDefault()
  }



  return (
    <form className="register-form" action="" onSubmit={preventDefault}>
      <EmailInput handleEmailChange={handleEmailChange} email={email} />
      <UsernameInput handleUsernameChange={handleUsernameChange} username={username} />
      <PasswordInput handlePasswordChange={handlePasswordChange} password={password} />
      <RegisterButton checkExistingUsername={checkExistingUsername} handleUserRegister={handleUserRegister} />
    </form>
  )
}

export default RegisterForm