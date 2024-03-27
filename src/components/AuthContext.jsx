import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  auth: false,
  setAuth: () => { },
  currentUser: "",
  setCurrentUser: () => { },
  currentUserID: "",
  setCurrentUserID: () => { }
});

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth, currentUser, setCurrentUser, currentUserID, setCurrentUserID }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
