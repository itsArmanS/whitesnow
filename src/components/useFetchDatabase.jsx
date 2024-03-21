import React, { useEffect } from "react";

function useFetchDatabase({ setPosts }) {
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
  }, [setPosts])

  return null;
}

export default useFetchDatabase