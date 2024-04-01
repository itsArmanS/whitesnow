import React, { useState } from "react";
import "../styles/login.css"
import UsernameInput from "./UsernameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import RegisterButton from "./RegisterButton";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import { v4 as uuid } from 'uuid';

function RegisterForm({ getErrorMessage }) {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, control, formState: { errors }, watch } = useForm();
  const watchFields = watch([username, password, email])

  async function checkExistingUsername() {
    try {
      const response = await fetch("http://localhost:3005/users");
      const returnData = await response.json();
      const foundUser = returnData.find(item => item.username === username || item.email === email);

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
        email: email,
        profile: {
          followers: [],
          following: [],
          flakes: 0,
          country: "N/A",
          hobby: "N/A",
          emoji: "❄️",
          userSince: new Date().toISOString().split('T')[0]
        }
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
      setTimeout(() => {
        getErrorMessage("")
      }, 2000)
    }

  }

  const onSubmit = async (data) => {
    setUsername(data.username);
    setPassword(data.password);
    setEmail(data.email)
    if (username && password && email) {
      await checkExistingUsername();
      await handleUserRegister();
      console.log("Form submitted", data)
    }

  }

  return (
    <>
      <form className="register-form" action="" onSubmit={handleSubmit(onSubmit)} noValidate>
        <EmailInput register={register} errors={errors} />
        <UsernameInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <RegisterButton checkExistingUsername={checkExistingUsername} handleUserRegister={handleUserRegister} />
      </form>
      <DevTool control={control} />
    </>
  )
}

export default RegisterForm