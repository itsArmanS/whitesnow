import React, { useState, useContext, useEffect } from "react";
import "../styles/settings.css";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import SettingsUsernameInput from "./SettingsUsernameInput";
import SettingsCountryInput from "./SettingsCountryInput";
import SettingsHobbyInput from "./SettingsHobbyInput"
import AuthContext from "./contexts/AuthContext";
import RefreshProfileContext from "./contexts/RefreshProfileContext";

function SettingsProfileInputs({ userData, toggleSettingsDialog }) {
  const { currentUserID } = useContext(AuthContext);
  const { setRefreshProfile } = useContext(RefreshProfileContext)
  const [settingsUsername, setSettingsUsername] = useState('');
  const [settingsCountry, setSettingsCountry] = useState('');
  const [settingsHobby, setSettingsHobby] = useState('');

  const { register, handleSubmit, control, formState: { errors } } = useForm();

  useEffect(() => {
    if (settingsUsername && settingsCountry && settingsHobby) {
      changeUserProfileData();
    }
  }, [settingsUsername, settingsCountry, settingsHobby]);

  const changeUserProfileData = async () => {
    const updatedUserUsername = {
      username: settingsUsername
    }

    const updatedUserProfile = {
      ...userData.profile,
      country: settingsCountry,
      hobby: settingsHobby
    }

    const updatedUserData = {
      ...updatedUserUsername,
      profile: updatedUserProfile
    }

    try {
      const response = await fetch(`http://localhost:3005/users/${currentUserID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });
      const data = await response.json();
      console.log("update success", data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  const onSubmit = async (data) => {
    setSettingsUsername(data.usernameSettings);
    setSettingsCountry(data.country.label);
    setSettingsHobby(data.hobbySettings);

    if (data.usernameSettings && data.country.label && data.hobbySettings) {
      console.log("success")
      await changeUserProfileData();
      toggleSettingsDialog();
      setRefreshProfile(prevState => !prevState);
    }
  }

  return (
    <>
      <form action="settings-form" onSubmit={handleSubmit(onSubmit)} id="profile-settings-form" noValidate>
        <SettingsUsernameInput register={register} errors={errors} userData={userData} />
        <SettingsCountryInput name="country" control={control} />
        <SettingsHobbyInput register={register} errors={errors} userData={userData} />
        <button className="save-profile-settings">Save</button>
      </form>
      <DevTool control={control} />
    </>
  )
}

export default SettingsProfileInputs