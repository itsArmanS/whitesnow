import React, { useState } from "react";
import "../styles/profileLayout.css"
import "../styles/profileFeed.css"
import "../styles/settings.css"

function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSettingsDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="settings-open-button" onClick={toggleSettingsDialog}></button>
      {
        isOpen && (
          <dialog className="settings-dialog" open>
            test
          </dialog>
        )
      }
    </>
  )
}

export default SettingsButton