import React from "react";
import { Grid } from "@material-ui/core";
import LiveUpdate from "./LiveUpdate";

function Sections() {
    return (
      <Grid item container xs={12}>
        <LiveUpdate />
      </Grid>
    );
}

export default Sections;
