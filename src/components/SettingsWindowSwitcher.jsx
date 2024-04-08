import React from "react";
import "../styles/settings.css"
import SettingsProfileInputs from "./SettingsProfileInputs";
import SettingsPasswordWindow from "./SettingsPasswordWindow";
import ChangeProfileImage from "./ChangeProfileImage";

function SettingsWindowSwitcher({ switcher, userData, toggleSettingsDialog, setRefreshProfile }) {
  let content;

  switch (switcher) {
    case 0:
      content = <SettingsProfileInputs userData={userData} toggleSettingsDialog={toggleSettingsDialog} />
      break;
    case 1:
      content = <SettingsPasswordWindow userData={userData} toggleSettingsDialog={toggleSettingsDialog} setRefreshProfile={setRefreshProfile} />
      break;
    case 2:
      content = <ChangeProfileImage userData={userData} toggleSettingsDialog={toggleSettingsDialog} />
      break;
    case 3:
      content = <div>4</div>
      break;
  }
  return <div>{content}</div>
}

export default SettingsWindowSwitcher

