import React, { useEffect, useState } from "react";

function useFetchDatabasePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response = await fetch("http://localhost:3005/posts");
        let data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPosts();
  }, [])

  return posts;
}

export default useFetchDatabasePosts