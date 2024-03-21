import React, { useState } from "react";
import "../styles/mainFeed.css"

function SnowflakeButton() {
  const [snowflakeCount, setSnowflakeCount] = useState(0);
  const [snowflakeClicked, setSnowflakeClicked] = useState(false);

  const handleSnowflakeClick = () => {
    setSnowflakeCount(snowflakeCount + 1);
    setSnowflakeClicked(true);
  }

  const handleSnowflakeUnclick = () => {
    setSnowflakeCount(snowflakeCount - 1);
    if (snowflakeCount <= 0) {
      setSnowflakeCount(0);
    }
    setSnowflakeClicked(false);
  }

  return (
    <>
      {snowflakeClicked ?
        <button className="snowflakeButton" onClick={handleSnowflakeUnclick}></button>
        : < button className="snowflakeButton" onClick={handleSnowflakeClick}></button >}
      <span>{snowflakeCount}</span>
    </>
  )
}

export default SnowflakeButton