import React, { useState, useEffect } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import MainFeed from "./MainFeed";
import "../styles/homeLayout.css";

function HomeLayout() {
  return (
    <div className="app-layout">
      <div className="app-header">

      </div>
      <div className="app-panel-wrapper">
        <LeftPanel />
        <MainFeed />
        <RightPanel />
      </div>
    </div>
  )
}

export default HomeLayout