import React from "react";
import "../styles/settings.css";

function SettingsHobbyInput({ register, errors, userData }) {

  return (
    <div className="settings-input-wrapper">
      <label htmlFor="hobbySettings">Hobby</label>
      <input type="text"
        id="hobbySettings"
        defaultValue={userData.profile.hobby}
        {...register("hobbySettings", {
          required: "Cannot be empty*",
        })}
      />
      <p>{errors.hobbySettings?.message}</p>
    </div>
  )
}

export default SettingsHobbyInput