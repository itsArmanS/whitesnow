import React from "react";
import "../styles/login.css"

function EmailInput({ register, errors }) {

  return (
    < >
      <label htmlFor="emailInput">Email</label>
      <input type="email"
        id="emailInput"
        {...register("email", {
          required: "Email is required!",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Provide a valid email!!"
          }
        })}
      />
      <p>{errors.email?.message}</p>

    </>
  )
}
export default EmailInput