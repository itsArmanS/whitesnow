import React from "react";
import "../styles/login.css"

function PasswordInput({ register, errors, onChangePassword }) {

  return (
    <>
      <label htmlFor="passwordInput">Password</label>
      <input type="password"
        id="passwordInput"
        {...register("password", {
          required: "Incorrect credentials!!",
        })}
        onChange={onChangePassword}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}
    </ >
  )
}
export default PasswordInput