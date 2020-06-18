import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  hero: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bolder",
    fontSize: "5.4rem",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "2rem",
    letterSpacing: ".7px",
    marginTop: "4rem",
    padding: "0 4rem"
  },
});

function Hero() {
  const classes = useStyles();
  return (
    <Grid
      item
      className={classes.hero}
      xs={10}
    >
      <Typography
        variant="h1"
        style={{ color: "primary" }}
        color="primary"
        className={classes.title}
      >
        Coronavirus disease (COVID-19) outbreak
      </Typography>
      <Typography variant="body1" color="primary" className={classes.subtitle}>
        Most people infected with the COVID-19 virus will experience mild to
        moderate respiratory illness and requiring special treatment. Older
        people, and those with underlying medical problems
      </Typography>
    </Grid>
  );
}

export default Hero;
