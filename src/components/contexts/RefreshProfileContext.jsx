import React, { createContext, useState } from 'react';

const RefreshProfileContext = createContext({
  refreshProfile: false,
  setRefreshProfile: () => { }
});

export const RefreshProfileContextProvider = ({ children }) => {
  const [refreshProfile, setRefreshProfile] = useState(false);

  return (
    <RefreshProfileContext.Provider value={{ refreshProfile, setRefreshProfile }}>
      {children}
    </RefreshProfileContext.Provider>
  );
};

export default RefreshProfileContext;
