import React from "react";
import { useForm } from 'react-hook-form';
import "../styles/settings.css";

function SettingsProfileInputs({ userData }) {

  const { register, handleSubmit, control, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form action="settings-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="username-settings-input-wrapper">
        <label htmlFor="usernameSettings">Country</label>
        <input type="text"
          id="usernameSettings"
          defaultValue={userData.username}
          {...register("usernameSettings", {
            required: "Cannot be empty*!"
          })}
        />
        <p>{errors.usernameSettings?.message}</p>
      </div>
      <button>Save</button>
    </form>

  )
}

export default SettingsProfileInputs