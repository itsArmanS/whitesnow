import React, { useEffect, useState } from "react";
import "../styles/searchPage.css"

function SearchPageResults({ posts, dummyPosts }) {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    if (posts && dummyPosts) {
      setAllPosts([...posts, ...dummyPosts])
    }
  }, [posts, dummyPosts]);

  const handleClick = (postId) => {
    console.log(postId, "postID");
  };

  return (
    <div className="search-page-results-wrapper">
      <div className="search-page-results">
        {allPosts.length
          ? allPosts.map((post) => (
            <button
              key={post.id}
              className="post-result-wrapper"
              onClick={() => handleClick(post.id)}
            >
              {post.body}
            </button>
          ))
          : <div>Loading...</div>
        }
      </div>
    </div>
  )
}

export default SearchPageResults