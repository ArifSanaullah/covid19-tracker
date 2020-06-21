import React from "react";
import { Grid } from "@material-ui/core";
import LiveUpdate from "./LiveUpdate";
import StatsTable from "./StatsTable";

function Sections() {
  return (
    <Grid item container xs={12} justify="center">
      <LiveUpdate />
      <StatsTable />
    </Grid>
  );
}

export default Sections;
