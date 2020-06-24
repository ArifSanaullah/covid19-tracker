import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, FormControl, Select, Grid } from "@material-ui/core";

import { HistoricalStatsContext } from "../../../store/contexts/HistoricalStats";
import { SET_SELECTED_COUNTRY } from "../../../store/actionTypes";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "32rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontSize: "1.4rem",
  },
  countryName: {
    fontSize: "1.4rem",
    padding: theme.spacing(1),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();

  const { historicalStats, selectedCountry, dispatch } = useContext(
    HistoricalStatsContext
  );

  const handleChange = (target) => {
    dispatch({
      type: SET_SELECTED_COUNTRY,
      payload: { selectedCountry: target.value },
    });
  };

  const countryNames = historicalStats
    ? Array.from(new Set(historicalStats.map(({ country }) => country)))
    : [];

  return (
    <Grid item xs={12} lg={3}>
      {historicalStats ? (
        <FormControl className={classes.formControl}>
          <Select
            value={selectedCountry}
            onChange={(e) => handleChange(e.target)}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "Without label" }}
            defaultValue=""
          >
            <MenuItem
              selected
              disabled
              value=""
              className={classes.countryName}
            >
              Select Country
            </MenuItem>
            {countryNames.map((c) => (
              <MenuItem
                key={uuidv4()}
                value={c.toLowerCase()}
                className={classes.countryName}
              >
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
    </Grid>
  );
}
