import React, { useState, useEffect } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import MainFeed from "./MainFeed";
import "../styles/homeLayout.css";
import SiteToolbar from "./SiteToolbar";

function HomeLayout() {
  const [refreshPosts, setRefreshPosts] = useState(false);

  const handleRefreshPosts = () => {
    setRefreshPosts(prevState => !prevState);
    console.log(refreshPosts, "REFRESH")
  }

  return (
    <div className="app">
      <SiteToolbar />
    </div>
  )
}

export default HomeLayout