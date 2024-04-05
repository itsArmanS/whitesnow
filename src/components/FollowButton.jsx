import React, { useEffect, useState, useContext } from "react";
import AuthContext from "./AuthContext";
import "../styles/profileTopUsers.css";

function FollowButton({ user }) {
  const { currentUserID, currentUser } = useContext(AuthContext);
  const [following, setFollowing] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3005/users/${currentUserID}`);
        const userData = await response.json();
        setUserProfile(userData.profile);
        const { following } = userData.profile || {};
        setFollowing(following || []);
        setIsFollowing(following && following.some(f => f.followingID === user.id));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);


  const handleClick = async (e) => {
    e.stopPropagation()
    try {
      const updatedFollowing = isFollowing
        ? following.filter(f => f.followingID !== user.id)
        : [...following, { followingID: user.id, followingUsername: user.username }];

      const updatedUserData = {
        ...userProfile,
        following: updatedFollowing,
      };

      const followersData = isFollowing
        ? user.profile.followers.filter(f => f.followerID !== currentUserID)
        : [...user.profile.followers, { followerID: currentUserID, followerUsername: currentUser }]

      const updatedFollowersData = {
        ...user.profile,
        followers: followersData
      }

      await fetch(`http://localhost:3005/users/${currentUserID}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: updatedUserData }),
      });

      await fetch(`http://localhost:3005/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: updatedFollowersData }),
      })

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
