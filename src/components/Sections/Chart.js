import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Grid, Typography } from "@material-ui/core";
import { red, green, orange, grey } from "@material-ui/core/colors";

import { HistoricalStatsContext } from "../../store/contexts/HistoricalStats";
import SelectChartCountry from "./components/SelectChartCountry";

function Chart() {
  const { historicalStats, selectedCountry } = useContext(
    HistoricalStatsContext
  );

  const selectedCountryData =
    historicalStats && selectedCountry
      ? historicalStats.find(
          ({ country }) => country.toLowerCase() === selectedCountry
        )
      : {};

  const labels = selectedCountryData?.timeline
    ? Object.keys(selectedCountryData.timeline.cases)
    : [];

  const datasets = [
    {
      label: "Deaths",
      data: selectedCountryData?.timeline
        ? Object.values(selectedCountryData.timeline.deaths)
        : [],
      backgroundColor: red[200],
    },
    {
      label: "Recovered",
      data: selectedCountryData?.timeline
        ? Object.values(selectedCountryData.timeline.recovered)
        : [],
      backgroundColor: green[200],
    },
    {
      label: "Cases",
      data: selectedCountryData?.timeline
        ? Object.values(selectedCountryData.timeline.cases)
        : [],
      backgroundColor: orange[200],
    },
  ];

  return (
    <Grid
      item
      xs={12}
      style={{ border: "2px solid blue" }}
      container
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <SelectChartCountry />
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h1" color="secondary">
          {selectedCountry.toUpperCase()}
        </Typography>
      </Grid>
      {selectedCountryData && (
        <Line
          data={{ labels, datasets }}
          options={{
            title: {
              display: true,
              text: "Country Stats",
              fontSize: 36,
              fontColor: grey[900],
            },
          }}
        />
      )}
    </Grid>
  );
}

export default Chart;
