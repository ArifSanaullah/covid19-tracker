import React from "react";

export const HistoricalStatsContext = React.createContext({
  historicalStats: null,
  loadingHistoricalStats: false,
  errorMessage: null,
  selectedCountry: "afghanistan",
  ChartType: "Line"
});

export const HistoricalStatsProvider = ({ children, state }) => {
  return (
    <HistoricalStatsContext.Provider value={state}>
      {children}
    </HistoricalStatsContext.Provider>
  );
};
