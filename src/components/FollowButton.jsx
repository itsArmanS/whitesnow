import React, { useEffect, useState, useContext } from "react";
import AuthContext from "./AuthContext";
import "../styles/profileTopUsers.css";

function FollowButton({ topUser }) {
  const { currentUserID } = useContext(AuthContext);
  const [following, setFollowing] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3005/users/${currentUserID}`);
        const userData = await response.json();
        setUserProfile(userData.profile);
        const { following } = userData.profile || {}; // Ensure following is initialized correctly
        setFollowing(following || []);
        setIsFollowing(following && following.some(f => f.followingID === topUser.id));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [currentUserID, topUser.id, following]);


  const handleClick = async () => {
    try {
      const updatedFollowing = isFollowing
        ? following.filter(f => f.followingID !== topUser.id)
        : [...following, { followingID: topUser.id, followingUsername: topUser.username }];

      const updatedUserData = {
        ...userProfile,
        following: updatedFollowing,
      };

      await fetch(`http://localhost:3005/users/${currentUserID}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: updatedUserData }),
      });

      setFollowing(updatedFollowing);
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <button className={isFollowing ? "following-button" : "follow-button"} onClick={handleClick}>
      {isFollowing ? "FOLLOWING" : "FOLLOW"}
    </button>
  );
}

export default FollowButton;
