import React from "react";
import "../styles/login.css"

function PasswordInput({ register, errors }) {

  return (
    <>
      <label htmlFor="passwordInput">Password</label>
      <input type="password"
        id="passwordInput"
        {...register("password", {
          required: "Enter a valid password!",
          message: "Enter a valid password",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long."
          },
          maxLength: {
            value: 20,
            message: "Password cannot exceed 20 characters."
          }
        })}

      />
      {errors.password && <p className="error">{errors.password.message}</p>}
    </ >
  )
}
export default PasswordInput