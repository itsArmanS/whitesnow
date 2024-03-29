import React, { createContext, useState } from 'react';

const RefreshContext = createContext({
  refresh: false,
  setRefresh: () => { }
});

export const RefreshContextProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export default RefreshContext;
