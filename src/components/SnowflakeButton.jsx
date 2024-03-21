import React, { useState } from "react";
import "../styles/mainFeed.css"

function SnowflakeButton() {
  const [snowflakeCount, setSnowflakeCount] = useState(0);

  const handleSnowflakeClick = () => {
    setSnowflakeCount(snowflakeCount + 1);
  }

  return (
    <>
      <button className="snowflakeButton" onClick={handleSnowflakeClick}></button>
      <span>{snowflakeCount}</span>
    </>
  )
}

export default SnowflakeButton