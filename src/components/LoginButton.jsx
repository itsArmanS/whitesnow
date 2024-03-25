import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function LoginButton(props) {
  const [data, setData] = useState(null);
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();
  const username = props.username;
  const password = props.password;

  useEffect(() => {
    if (data !== null) {
      data.forEach(item => {
        if (item[username].password === password) {
          setAuth(true);
        } else {
          console.log("nah")
        }
      });
    } else { console.log("stopped") }
  }, [data])

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3005/users");
      const returnedData = await response.json();
      setData(returnedData);
    } catch (error) {
      console.log(error)
    }
  }

  const handleLoginClick = async () => {
    await fetchData();
  }

  if (auth) {
    navigate("/profile");
  }

  return (
    <button className="login-button" onClick={handleLoginClick}></button>
  )
}

export default LoginButton