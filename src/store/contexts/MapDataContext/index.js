import React from "react";

export const MapDataContext = React.createContext({
  mapData: null,
  loadingMapData: false,
  error: null,
});

export const MapDataContextProvider = ({ children, state }) => {
  return (
    <MapDataContext.Provider value={state}>{children}</MapDataContext.Provider>
  );
};
