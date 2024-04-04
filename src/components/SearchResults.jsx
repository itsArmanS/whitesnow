import React, { useEffect, useState } from "react";
import "../styles/homeSearch.css"

function SearchResults({ posts, dummyPosts }) {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    setAllPosts([...posts, ...dummyPosts])
  }, [posts, dummyPosts])

  const handleClick = (postId) => {
    console.log(postId, "postID");
  };

  return (
    <div className="search-results">
      {allPosts.length
        ? allPosts.map((postResult) => (
          <button
            key={postResult.id}
            className="post-result-wrapper"
            onClick={() => handleClick(postResult.id)}
          >
            {postResult.body}
          </button>
        ))
        : <div>Loading...</div>
      }
    </div>
  )
}

export default SearchResults