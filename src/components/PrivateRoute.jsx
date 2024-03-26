import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const { auth, setAuth } = useContext(AuthContext);
  return auth ? <Component {...rest} /> : <Navigate to="/" replace />;
};
export default PrivateRoute;