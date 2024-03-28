import { useState, useEffect } from 'react';

const useGetUserProfile = (userID) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3005/users?id=${userID}`)
      .then(response => response.json())
      .then(data => {
        const user = data[0];
        if (user) {
          setProfileData(user.profile);
          const up = user.profile;
          console.log(up)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [userID]);

  return profileData;
};

export default useGetUserProfile;
