import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  auth: false,
  setAuth: () => { },
  handleLogin: () => { }, // Optional function to handle successful login logic
  handleLogout: () => { }, // Optional function to handle logout logic
});

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const handleLogin = () => {
    setAuth(true); // Update auth state on successful login
  };

  const handleLogout = () => {
    setAuth(false); // Update auth state on logout
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
