import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homeLayout.css";
import SiteToolbar from "./SiteToolbar";
import AuthContext from "./AuthContext";
import PostWheels from "./PostWheels";

function HomeLayout() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      {auth ? (
        <div className="home-wrapper">
          <SiteToolbar />
          <PostWheels />
        </div>
      ) : (
        navigate("/")
      )}
    </>


  )
}

export default HomeLayout