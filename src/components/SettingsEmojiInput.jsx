import React from "react";
import "../styles/settings.css";

function SettingsEmojiInput({ register, errors, userData }) {

  return (
    <div className="settings-input-wrapper">
      <label htmlFor="emojiSettings">Emoji</label>
      <input type="text"
        id="emojiSettings"
        defaultValue={userData.profile.emoji}
        {...register("emojiSettings", {
          required: "Cannot be empty*",
          minLength: {
            value: 2,
            message: "Only 1 emoji for this field"
          },
          maxLength: {
            value: 4,
            message: "Only 1 emoji for this field"
          }
        })}
      />
      <p>{errors.emojiSettings?.message}</p>
    </div>
  )
}

export default SettingsEmojiInput