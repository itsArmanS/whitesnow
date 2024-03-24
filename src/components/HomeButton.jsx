import React from "react";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <button className="home-button-wrapper">
      <Link className="home-link" to="/">HOME</Link >
      <img className="home-snowflake" src="/images/homeSnowflake.svg" alt="" />
    </button>
  )
}

export default HomeButton