import React from "react";

export const GlobalContext = React.createContext({ summary: null });

export const GlobalContextProvider = ({ children, state }) => {
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};
