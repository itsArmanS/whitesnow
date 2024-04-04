import React from "react";
import { useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import "../styles/searchPage.css"
import SiteToolbar from "./SiteToolbar";
import SearchPageResults from "./SearchPageResults";

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchedTermTransfer = queryParams.get("term");

  return (
    <div className="search-page-wrapper">
      <SiteToolbar page={"search"} />
      <div className="search-page-input-wrapper">
        <SearchInput page={"search"} searchedTermTransfer={searchedTermTransfer} />
      </div>
      <SearchPageResults />
    </div>
  )
}

export default SearchPage