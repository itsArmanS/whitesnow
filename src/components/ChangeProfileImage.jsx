import React, { useContext } from "react";
import "../styles/settings.css"
import { useForm } from 'react-hook-form';
import SettingsSaveCloseButtons from "./SettingsSaveCloseButtons";
import AuthContext from "./contexts/AuthContext";
import RefreshProfileContext from "./contexts/RefreshProfileContext";

function ChangeProfileImage({ userData, toggleSettingsDialog }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { currentUserID } = useContext(AuthContext);
  const { setRefreshProfile } = useContext(RefreshProfileContext)


  const onSubmit = (data) => {
    const updatedProfileImage = {
      ...userData.profile,
      profileImage: data.changeImage
    }

    const updatedUserData = {
      ...userData,
      profile: updatedProfileImage
    }

    const patchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3005/users/${currentUserID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        });

        if (response.ok) {
          toggleSettingsDialog();
          setRefreshProfile(true)
        } else {
          console.error("Failed to patch user data");
        }
      } catch (error) {
        console.error("Error patching user data:", error);
      }
    };
    patchUserData();
  }

  return (
    <form action="" className="change-image-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>To change your profile image:</p>
        <ol>
          <li>Locate your image on your browser</li>
          <li>Right click and select "Copy image address"</li>
          <li>Paste the link below and hit save</li>
        </ol>
      </div>
      <div className="change-image-input">
        <label htmlFor="changeImage">Change Image</label>
        <input
          type="text"
          id="changeImage"
          placeholder="Paste your link here"
          {...register("changeImage", {
            required: "Cannot be empty*",
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "Enter a valid link*"
            }
          })}
        />
        <p className="error">{errors.changeImage?.message}</p>
      </div>
      <SettingsSaveCloseButtons toggleSettingsDialog={toggleSettingsDialog} />
    </form>
  )
}

export default ChangeProfileImage