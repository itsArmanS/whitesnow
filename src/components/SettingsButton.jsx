import React, { useState } from "react";
import "../styles/profileLayout.css"
import "../styles/profileFeed.css"
import "../styles/settings.css"
import SettingsProfileInputs from "./SettingsProfileInputs";

function SettingsButton({ userData }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSettingsDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="open-settings-button" onClick={toggleSettingsDialog}></button>
      {
        isOpen && (
          <dialog className="settings-dialog" open>
            <div className="settings-panel">

            </div>
            <div className="settings-window">
              <SettingsProfileInputs userData={userData} toggleSettingsDialog={toggleSettingsDialog} />
            </div>
          </dialog>
        )
      }
    </>
  )
}

export default SettingsButton