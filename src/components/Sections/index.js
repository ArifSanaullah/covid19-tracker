import React, { useReducer } from "react";
import { Grid } from "@material-ui/core";
import LiveUpdate from "./LiveUpdate";
import StatsTable from "./StatsTable";
import WorldMap from "./WorldMap";
import Chart from "./Chart";
import { MapDataContextProvider } from "../../store/contexts/MapDataContext";
import mapDataReducer from "../../store/reducers/WorldMapReducer";

function Sections() {
  const [state, dispatch] = useReducer(mapDataReducer, {
    mapData: null,
    loadingMapData: false,
    error: null,
    viewPort: {
      width: "100vw",
      height: "100vh",
      latitude: 30.3753,
      longitude: 69.3451,
      zoom: 4,
    },
  });

  return (
    <Grid item container xs={12} justify="center">
      <MapDataContextProvider state={{ state, dispatch }}>
        <Chart />
        <WorldMap />
      </MapDataContextProvider>
      <LiveUpdate />
      <StatsTable />
    </Grid>
  );
}

export default Sections;
