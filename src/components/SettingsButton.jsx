import React, { useContext, useEffect, useState } from "react";
import "../styles/profileLayout.css"
import "../styles/profileFeed.css"
import "../styles/settings.css"
import SettingsWindowSwitcher from "./SettingsWindowSwitcher";
import SettingsPanel from "./SettingsPanel";
import AuthContext from "./contexts/AuthContext";
import RefreshProfileContext from "./contexts/RefreshProfileContext";

function SettingsButton() {
  const { currentUserID } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorLocation, setIndicatorLocation] = useState(0)
  const [userData, setUserData] = useState(null)
  const { refreshProfile } = useContext(RefreshProfileContext)

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    fetch(`http://localhost:3005/users/${currentUserID}`)
      .then(response => response.json())
      .then(data => setUserData(data))
  }

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
            <SettingsPanel getIndicatorLocation={getIndicatorLocation} userData={userData} />
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