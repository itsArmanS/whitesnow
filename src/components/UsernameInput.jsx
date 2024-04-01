import React from "react";
import "../styles/login.css"

function UsernameInput({ register, errors }) {

  return (
    <>
      <label htmlFor="usernameInput">Username</label>
      <input type="text"
        id="usernameInput"
        {...register("username", {
          required: "Username is required!",
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters long."
          },
          maxLength: {
            value: 20,
            message: "Username cannot exceed 20 characters."
          }
        })}
      />
      {errors.username && <p className="error">{errors.username.message}</p>}
    </>
  )
}
export default UsernameInput

