import React from "react";

export const GlobalContext = React.createContext({
  summary: null,
  error: null,
  loading: false,
});

export const GlobalContextProvider = ({ children, state }) => {
  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
