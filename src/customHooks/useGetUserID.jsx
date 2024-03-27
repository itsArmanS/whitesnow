import { useState, useEffect } from 'react';

const useGetUserID = (username) => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3005/users?username=${username}`);
        const userData = await response.json();
        if (userData.length > 0) {
          setUserID(userData[0].id);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  return userID;
};

export default useGetUserID;
