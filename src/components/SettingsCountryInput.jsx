import React from "react";
import "../styles/settings.css";
import SettingsCountrySelect from "./SettingsCountrySelect"

function SettingsCountryInput({ name, control }) {

  return (
    <div className="settings-input-wrapper">
      <label htmlFor="">Country</label>
      <SettingsCountrySelect name={name} control={control} />
    </div>
  )
}

export default SettingsCountryInput