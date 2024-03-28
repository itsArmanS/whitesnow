import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homeLayout.css";
import SiteToolbar from "./SiteToolbar";
import AuthContext from "./AuthContext";
import LoginPage from "./LoginPage";

function HomeLayout() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

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