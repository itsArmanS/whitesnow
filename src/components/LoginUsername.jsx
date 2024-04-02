import React from "react";
import "../styles/login.css"

function LoginUsernameInput({ register, errors, onChangeUsername }) {
  register("username");
  return (
    <>
      <label htmlFor="usernameInput">Username</label>
      <input type="text"
        id="usernameInput"
        {...register("username", {
          required: "Username is required!",
        })}
        onChange={onChangeUsername}
      />
      {errors.username && <p className="error">{errors.username.message}</p>}

    </>
  )
}
export default LoginUsernameInput

