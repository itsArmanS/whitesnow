import React, { useContext, useEffect, useState } from "react";
import "../styles/profileLayout.css"
import SiteToolbar from "./SiteToolbar";
import UserProfile from "./UserProfile";
import AuthContext from "./contexts/AuthContext";
import { useParams } from "react-router-dom";
import { RefreshContextProvider } from "./contexts/RefreshContext";
import { RefreshProfileContextProvider } from "./contexts/RefreshProfileContext";

function ProfileLayout() {
  const { userID } = useParams();
  const { currentUserID } = useContext(AuthContext)
  const [changeUserID, setChangeUserID] = useState("")

  useEffect(() => {
    setChangeUserID(userID);
  }, [userID]);

  return (
    <RefreshContextProvider>
      <RefreshProfileContextProvider>
        <div className="profile-layout">
          <SiteToolbar page={"home"} />
          <div className="profile-banner">

          </div>
          {changeUserID ? <UserProfile userID={changeUserID} /> : "test"}
        </div>
      </RefreshProfileContextProvider>
    </RefreshContextProvider>

  )
}

export default ProfileLayout