import React, { useState, useEffect } from "react";
import "../styles/profileTopUsers.css"
import FollowButton from "./FollowButton";

function GetTopUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const userData = async () => {
      const response = await fetch("http://localhost:3005/users");
      const returnedData = await response.json();

      const sortedUsers = returnedData.sort((a, b) => b.flakes - a.flakes);

      const topUsers = sortedUsers.slice(0, 10)
      setUsers(topUsers)

    }
    userData();
  }, [])

  if (users) {
    console.log(users, "top10")
  }

  return (
    <>
      {users.map((user, index) => (

        <div className="top-user-scorecard">
          <div className="leaderboard-number">
            <span>#{index + 1}</span>
          </div>
          <div className="user-info-wrapper">
            <div>
              <img src="/public/images/default-user-image" alt="" />
              <span>@{user.username}</span>
            </div>
            <div>
              Flakes: {user.profile.flakes}
            </div>
          </div>
          <div className="follow-button-wrapper">
            <FollowButton />
          </div>
        </div>

      ))}
    </>
  )
}

export default GetTopUsers