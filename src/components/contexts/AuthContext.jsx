import React, { createContext, useState } from 'react';

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
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserID, setCurrentUserID] = useState("false");

  return (
    <AuthContext.Provider value={{ auth, setAuth, currentUser, setCurrentUser, currentUserID, setCurrentUserID }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
