import React from "react";
import "../styles/settings.css";

function SettingsUsernameInput({ register, errors, userData }) {

  return (
    <div className="settings-input-wrapper">
      <label htmlFor="usernameSettings">Username</label>
      <input type="text"
        id="usernameSettings"
        defaultValue={userData.username}
        {...register("usernameSettings", {
          required: "Cannot be empty*",
        })}
      />
      <p>{errors.usernameSettings?.message}</p>
    </div>
  )
}

export default SettingsUsernameInput