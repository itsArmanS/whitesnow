import React, { useContext, useState, useEffect } from "react";
import "../styles/settings.css"
import { useForm } from "react-hook-form";
import AuthContext from "./contexts/AuthContext";

function SettingsPasswordWindow({ userData, toggleSettingsDialog }) {

  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [currentPassword, setCurrentPassword] = useState(null);
  const [changePassword1, setChangePassword1] = useState(null);
  const [changePassword2, setChangePassword2] = useState(null);
  const { currentUserID } = useContext(AuthContext)

  useEffect(() => {
    if (currentPassword && changePassword1 && changePassword2) {
      validatePasswords()
    }
  }, [currentPassword, changePassword1, changePassword2]);

  const validatePasswords = async (data) => {
    if (data.currentPassword !== userData.password) {
      setError("currentPassword", {
        type: "manual",
        message: "*Incorrect password",
      });
    } else {
      setCurrentPassword(data.currentPassword)
    }

    if (data.changePassword1.length <= 5 || data.changePassword1.length >= 15) {
      setError("changePassword1", {
        type: "manual",
        message: "*Password must be longer than 5 and smaller than 15",
      });
    } else {
      setChangePassword1(data.changePassword1)
    }

    if (data.changePassword2 !== data.changePassword1) {
      setError("changePassword2", {
        type: "manual",
        message: "*Passwords do not match!",
      });
    } else {
      setChangePassword2(data.changePassword2)
    }

    if (currentPassword && changePassword1 && changePassword2) {
      const updatedPassword = {
        ...userData,
        password: changePassword1
      }

      const response = await fetch(`http://localhost:3005/users/${currentUserID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPassword),
      });
    }
  }

  return (
    <form action="" className="settings-password-form" onSubmit={handleSubmit(validatePasswords)}>
      <div className="settings-input-wrapper">
        <label htmlFor="currentPassword">Current Password</label>
        <input type="password"
          id="currentPassword"
          placeholder="Enter your current password"
          {...register("currentPassword", {
            required: "*Required",
          })}
        />
        {errors.currentPassword && <p className="error">{errors.currentPassword?.message}</p>}
      </div>

      <div className="settings-input-wrapper">
        <label htmlFor="changePassword1">New Password</label>
        <input type="password"
          id="changePassword1"
          placeholder="Enter your new password"
          {...register("changePassword1", {
            required: "*Required",
          })}
        />
        <p className="error">{errors.changePassword1?.message}</p>
      </div>

      <div className="settings-input-wrapper">
        <label htmlFor="changePassword2">Repeat Password</label>
        <input type="password"
          id="changePassword2"
          placeholder="Repeat your new password"
          {...register("changePassword2", {
            required: "*Required",
          })}
        />
        <p className="error">{errors.changePassword2?.message}</p>
      </div>
      <button type="button" onClick={toggleSettingsDialog}>Cancel</button>
      <button>Save</button>
    </form>
  )
}

export default SettingsPasswordWindow