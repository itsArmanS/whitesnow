import React, { useEffect, useState } from "react";
import "../styles/homeSearch.css"

function SearchResults({ posts, dummyPosts }) {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    setAllPosts([...posts, ...dummyPosts])
  }, [posts, dummyPosts])

  return (
    <div className="search-results">
      {allPosts
        ? allPosts.map((postResult) => (
          <button className="post-result-wrapper">
            {postResult.body}
          </button>
        ))
        : <div>Loading...</div>
      }
    </div>
  )
}

export default SearchResults