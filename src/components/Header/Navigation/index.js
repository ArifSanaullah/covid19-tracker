import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import NavMenu from "./NavMenu";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: "fit-content"
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "linear-gradient(to right, #93291e, #93291e",
  },
  typography: {
    fontFamily: "Roboto",
  },
}));

function Navigation() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
        style={{
          background:
            "linear-gradient(to right, rgba(147, 41, 30, .1), rgba(147, 41, 30, .1)",
        }}
      >
        <Toolbar>
          <img
            src="https://i.ibb.co/gzVZzJZ/covid-loader-large.png"
            alt="logo"
            style={{ width: "8.5rem", height: "6rem", cursor: "pointer" }}
          />
          <Typography variant="h1" className={classes.title} color="primary">
            Covid19
          </Typography>
          <NavMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
