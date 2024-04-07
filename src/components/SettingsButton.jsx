import React, { useState } from "react";
import "../styles/profileLayout.css"
import "../styles/profileFeed.css"
import "../styles/settings.css"
import SettingsWindowSwitcher from "./SettingsWindowSwitcher";
import SettingsPanel from "./SettingsPanel";

function SettingsButton({ userData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorLocation, setIndicatorLocation] = useState(0)

  const toggleSettingsDialog = () => {
    setIsOpen(!isOpen);
  };

  const getIndicatorLocation = (loc) => {
    setIndicatorLocation(loc)
  }

  return (
    <>
      <button className="open-settings-button" onClick={toggleSettingsDialog}></button>
      {
        isOpen && (
          <dialog className="settings-dialog" open>
            <SettingsPanel getIndicatorLocation={getIndicatorLocation} />
            <div className="settings-window">
              <SettingsWindowSwitcher switcher={indicatorLocation} userData={userData} toggleSettingsDialog={toggleSettingsDialog} />
            </div>
          </dialog>
        )
      }
    </>
  )
}

export default SettingsButton