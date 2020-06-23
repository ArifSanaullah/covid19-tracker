import React, { useContext, useReducer } from "react";
import { Grid } from "@material-ui/core";
import { MapDataContext } from "../../store/contexts/MapDataContext";
import mapDataReducer from "../../store/reducers/WorldMapReducer";

function Chart() {
    const context = useContext(MapDataContext);
    const state = useReducer(mapDataReducer, {
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
  console.log("context =>", context, "state =>", state);
  return (
    <Grid item xs={12} style={{ color: "black" }}>
      Chart
    </Grid>
  );
}

export default Chart;
