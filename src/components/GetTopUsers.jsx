import React, { useState, useEffect } from "react";
import "../styles/profileTopUsers.css"

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
      {users.map(user => (

        <div className="top-user-scorecard">

        </div>

      ))}
    </>
  )
}

export default GetTopUsers