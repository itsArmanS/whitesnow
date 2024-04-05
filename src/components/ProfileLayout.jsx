import React, { useContext, useEffect, useState } from "react";
import "../styles/profileLayout.css"
import SiteToolbar from "./SiteToolbar";
import UserProfile from "./UserProfile";
import AuthContext from "./AuthContext";
import { useParams } from "react-router-dom";
import { RefreshContextProvider } from "./RefreshContext";

function ProfileLayout() {
  const { userID } = useParams();
  const { currentUserID } = useContext(AuthContext)
  const [changeUserID, setChangeUserID] = useState("")

  useEffect(() => {
    setChangeUserID(userID);
  }, [userID]);

  return (
    <RefreshContextProvider>
      <div className="profile-layout">
        <SiteToolbar page={"home"} />
        <div className="profile-banner">

        </div>
        {changeUserID ? <UserProfile userID={changeUserID} /> : "test"}
      </div>
    </RefreshContextProvider>

  )
}

export default ProfileLayout