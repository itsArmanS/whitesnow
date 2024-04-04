import React, { useEffect, useState } from "react";
import "../styles/searchPage.css"

function SearchPageResults({ posts, dummyPosts, searchedTerm }) {
  const [allPosts, setAllPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (posts && dummyPosts) {
      setAllPosts([...posts, ...dummyPosts])
    }
  }, [posts, dummyPosts]);

  const handleClick = (postId) => {
    console.log(postId, "postID");
  };


  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3005/users?username_like=${searchedTerm}`)
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error("Got error", error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [searchedTerm])

  return (
    <div className="search-page-results-wrapper">

      <div className="search-page-posts">
        <div className="search-page-post-tag">
          <div>POSTS</div>
        </div>
        <div className="search-page-post-results">
          {allPosts.length
            ? allPosts.map((post) => (
              <div
                key={post.id}
                className="search-post-result-wrapper"
                onClick={() => handleClick(post.id)}
              >
                {post.body}
              </div>
            ))
            : null
          }
        </div>
      </div>

      <div className="search-page-users">
        <div className="search-page-user-tag">
          <div>USERS</div>
        </div>
        <div className="search-page-user-results">
          {
            users.length ?
              users.map((user) => (
                <div className="search-user-result-wrapper">
                  {user.username}
                </div>
              ))
              :
              null
          }
        </div>
      </div>

    </div>
  )
}

export default SearchPageResults