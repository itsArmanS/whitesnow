import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homeLayout.css";
import SiteToolbar from "./SiteToolbar";
import AuthContext from "./AuthContext";
import LoginPage from "./LoginPage";

function HomeLayout() {
  const [refreshPosts, setRefreshPosts] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleRefreshPosts = () => {
    setRefreshPosts(prevState => !prevState);
    console.log(refreshPosts, "REFRESH")
  }

  return (
    <>
      {auth ? (
        <div className="app">
          <SiteToolbar />
        </div>
      ) : (
        navigate("/")
      )}
    </>


  )
}

export default HomeLayout