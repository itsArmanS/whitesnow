import React, { useEffect, useState } from "react";
import "../styles/siteToolbar.css"
import SearchButton from "./SearchButton";
import SearchInputSwap from "./SearchInputSwap";

function SearchInput({ page, searchedTermTransfer }) {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [dummyPosts, setDummyPosts] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const getUpdatesFromChild = (term) => {
    setSearchedTerm(term)
    setShowResults(!!term)
  }

  const currentSearch = (e) => {
    if (page === "home") {
      const term = e.target.value
      setSearchedTerm(term)
      setShowResults(!!term)
    }
  }

  const searchPosts = async (postType, searchedTerm) => {
    if (postType === "user") {
      try {
        const response = await fetch(`http://localhost:3005/posts?body_like=${searchedTerm}`)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json()
        setPosts(data);
      } catch (error) {
        console.error("Got error", error)
      }
    } else if (postType === "dummy") {
      try {
        const response = await fetch(`http://localhost:3005/dummies?body_like=${searchedTerm}`)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json()
        setDummyPosts(data);
      } catch (error) {
        console.error("Got error", error)
      }
    }
  }

  useEffect(() => {
    searchPosts("user", null)
    searchPosts("dummy", null)
  }, [])

  useEffect(() => {
    if (!searchedTerm) {
      setPosts([]);
      setDummyPosts([]);
    } else {
      searchPosts("user", searchedTerm);
      searchPosts("dummy", searchedTerm);
    }
  }, [searchedTerm]);

  return (
    <div className="home-search-wrapper">
      <SearchInputSwap
        searchedTerm={searchedTerm}
        searchedTermTransfer={searchedTermTransfer}
        currentSearch={currentSearch}
        page={page}
        posts={posts}
        dummyPosts={dummyPosts}
        showResults={showResults}
        getUpdatesFromChild={getUpdatesFromChild}
      />
    </div>


  )
}

export default SearchInput