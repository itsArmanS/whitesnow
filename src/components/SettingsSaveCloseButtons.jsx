import "../styles/settings.css"

function SettingsSaveCloseButtons({ toggleSettingsDialog }) {

  return (
    <div className="settings-button-wrapper">
      <button type="button" onClick={toggleSettingsDialog} className="close-settings-dialog">Cancel</button>
      <button className="save-profile-settings">Save</button>
    </div>
  )
}

export default SettingsSaveCloseButtons