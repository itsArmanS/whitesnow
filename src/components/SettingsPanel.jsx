import React, { useEffect, useState } from "react";
import "../styles/settings.css"

function SettingsPanel({ getIndicatorLocation }) {
  const [indicatorPosition, setIndicatorPosition] = useState(0)

  const changeIndicator = (loc) => {
    setIndicatorPosition(loc)
  }

  useEffect(() => {
    getIndicatorLocation(indicatorPosition);
  }, [indicatorPosition])

  return (
    <div className="settings-panel">
      <div className="settings-panel-buttons">
        <button className="profile-data-section" onClick={() => { changeIndicator(0) }}>
          EDIT PROFILE
        </button>
        <button className="account-security-section" onClick={() => { changeIndicator(1) }}>
          ACCOUNT SECURITY
        </button>
        <button className="account-security-section" onClick={() => { changeIndicator(2) }}>
          CHANGE IMAGE
        </button>
      </div>
      <div className="settings-panel-indication">
        {indicatorPosition === 0 ?
          <div className="settings-indicator"></div>
          :
          <div className="settings-indicator" style={{ top: `${indicatorPosition * 52}px` }}></div>
        }
      </div>
    </div>
  )
}

export default SettingsPanel