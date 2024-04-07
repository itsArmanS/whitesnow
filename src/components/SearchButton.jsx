import React, { useContext } from "react";
import "../styles/siteToolbar.css"
import { useNavigate } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

function SearchButton({ searchedTerm }) {
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = () => {
    if (auth) {
      navigate(`/search?term=${searchedTerm}`)
    }
  }

  return (
    <button className="search-button" onClick={handleClick}></button>
  )
}

export default SearchButton