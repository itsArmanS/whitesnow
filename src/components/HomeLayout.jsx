import React, { useState, useEffect } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import MainFeed from "./MainFeed";
import "../styles/homeLayout.css";

function HomeLayout() {
  const [refreshPosts, setRefreshPosts] = useState(false);

  const handleRefreshPosts = () => {
    setRefreshPosts(prevState => !prevState);
    console.log(refreshPosts, "REFRESH")
  }

  return (
    <div className="app-layout">
      <div className="app-header">

      </div>
      <div className="app-panel-wrapper">
        <LeftPanel handleRefreshPosts={handleRefreshPosts} />
        <MainFeed refreshPosts={refreshPosts} />
        <RightPanel />
      </div>
    </div>
  )
}

export default HomeLayout