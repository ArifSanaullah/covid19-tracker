import React from "react";

export const StatsTableContext = React.createContext({
    currentPage: 1,
    countriesPerPage: 10
});

export const StatsTableContextProvider = ({ children, state }) => {
  return (
    <StatsTableContext.Provider value={state}>{children}</StatsTableContext.Provider>
  );
};
