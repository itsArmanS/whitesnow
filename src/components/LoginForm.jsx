import React, { useState, useEffect, useContext } from "react";
import "../styles/login.css"
import LoginButton from "./LoginButton";
import AuthContext from "./contexts/AuthContext";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import useGetUserID from "../customHooks/useGetUserID"
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import LoginPasswordInput from "./LoginPassword";
import LoginUsernameInput from "./LoginUsername";
import { useNavigate } from "react-router-dom";


function LoginForm({ getErrorMessage }) {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccessful, setLoginSuccesful] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentUserID, setCurrentUserID } = useContext(AuthContext);
  const navigate = useNavigate();


  const { register, handleSubmit, control, formState: { errors }, watch, setValue } = useForm();

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


  const handleLogin = async () => {
    if (data !== null) {
      const foundUser = data.find(item => item.username === username && item.password === password);
      if (foundUser) {
        setAuth(true);
        return true;
      } else {
        return false;
      }
    } else {
      console.log("null")
    }
  }

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setValue("username", value);
    setUsername(value);
  }

  const onChangePassword = (e) => {
    const value = e.target.value;
    setValue("password", value);
    setPassword(value);
  }
  const userID = useGetUserID(username);

  const onSubmit = () => {
    setCurrentUser(username);
    setCurrentUserID(userID);
  }


  useEffect(() => {
    const loginSuccessful = handleLogin()
    if (auth) {
      if (loginSuccessful && currentUser && currentUserID) {
        navigate("/home");
      } else {
        alert("test")
      }
    } else {
      navigate("/login");
    }
  }, [currentUser, currentUserID, navigate, auth]);


  return (
    <>
      <form className="login-form" action="" onSubmit={handleSubmit(onSubmit)} >
        <div>
          <LoginUsernameInput register={register} errors={errors} watch={watch} onChangeUsername={onChangeUsername} />
        </div>
        <div>
          <LoginPasswordInput register={register} errors={errors} onChangePassword={onChangePassword} />
        </div>
        <LoginButton currentUser={currentUser} currentUserID={currentUserID} />
      </form>
      <DevTool control={control} />
    </>

  )
}

export default LoginForm