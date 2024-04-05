import React, { useState, useEffect } from "react";
import "../styles/profileTopUsers.css"
import FollowButton from "./FollowButton";
import { v4 as uuid } from "uuid";

function GetTopUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const userData = async () => {
      const response = await fetch("http://localhost:3005/users");
      const returnedData = await response.json();

      const validUsers = returnedData.filter(user => user.profile);
      const sortedUsers = validUsers.sort((a, b) => b.profile.flakes - a.profile.flakes);
      const topUsers = sortedUsers.slice(0, 10);

      setUsers(topUsers);
    }
    userData();
  }, [])

  return (
    <>
      {users.map((user, index) => (

        <div className="top-user-scorecard" key={uuid()}>
          <div className="leaderboard-number">
            <span>#{index + 1}</span>
          </div>
          <div className="user-info-wrapper">
            <div>
              <img src={user.profile.profileImage} alt="" />
              <span>@{user.username}</span>
            </div>
            <div>
              Flakes: {user.profile.flakes}
            </div>
          </div>
          <div className="follow-button-wrapper">
            <FollowButton user={user} />
          </div>
        </div >

      ))
      }
    </>
  )
}

export default GetTopUsers