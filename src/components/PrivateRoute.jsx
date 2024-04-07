import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const { auth } = useContext(AuthContext);
  return auth ? <Component {...rest} /> : <Navigate to="/" replace />;
};
export default PrivateRoute;