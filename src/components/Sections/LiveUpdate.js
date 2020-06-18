import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import LiveUpdateCard from "./components/LiveUpdateCard";
import { red, green, blue, orange } from "@material-ui/core/colors";
import { GlobalContext } from "../../store/contexts/GlobalContext";

function LiveUpdate() {
  const {
    state: { summary },
  } = useContext(GlobalContext);
  const customCardStyles = [
    { backgroundColor: red[100], color: red["A700"] },
    { backgroundColor: red[100], color: red["A700"] },
    { backgroundColor: orange[100], color: orange["A700"] },
    { backgroundColor: orange[100], color: orange["A700"] },
    { backgroundColor: green[100], color: green["A700"] },
    { backgroundColor: green[100], color: green["A700"] },
  ];
  return (
    <Grid
      item
      container
      xs={12}
      lg={12}
      justify="center"
      style={{
        background:
          "#f2f4f9 url(https://i.ibb.co/zHnyNHY/bg-pattren.png) no-repeat center",
        backgroundSize: "100% 100%",
        height: "100vh",
      }}
    >
      <Grid lg={10} item container xs={12} justify="center" spacing={2}>
        <Grid item container xs={12} lg={12} justify="center">
          <Grid
            item
            container
            xs={12}
            lg={10}
            justify="center"
            alignItems="center"
            alignContent="center"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" color="secondary">
              Last Updated at:{" "}
            </Typography>
            <Typography
              variant="h1"
              style={{ color: red["A700"], marginTop: "2rem" }}
            >
              {summary?.Date}
            </Typography>
          </Grid>
        </Grid>
        {summary &&
          Object.entries(summary?.Global).map((item, index) => (
            <Grid xs={12} lg={4} item key={index}>
              <LiveUpdateCard
                cardData={item}
                styles={customCardStyles[index]}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}

export default LiveUpdate;
