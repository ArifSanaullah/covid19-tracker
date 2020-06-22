import React from "react";
import { Grid } from "@material-ui/core";
import LiveUpdate from "./LiveUpdate";
import StatsTable from "./StatsTable";
import WorldMap from "./WorldMap";

function Sections() {
  return (
    <Grid item container xs={12} justify="center">
      <LiveUpdate />
      <StatsTable />
      <WorldMap />
    </Grid>
  );
}

export default Sections;
