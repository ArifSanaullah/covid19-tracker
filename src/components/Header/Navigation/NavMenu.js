import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Home, Info, AccountBox } from "@material-ui/icons";

const getStyles = makeStyles({
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
    fontSize: "1.6rem",
    textTransform: "uppercase",
    fontFamily: "Roboto",
    cursor: "pointer",
  },
  icon: {
    marginRight: "1rem",
    fontSize: "3rem",
  },
});

function NavMenu() {
  const classes = getStyles();
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Typography
            color="primary"
            variant="h6"
            className={classes.itemContainer}
          >
            <Home className={classes.icon} /> Home
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography
            color="primary"
            variant="h6"
            className={classes.itemContainer}
          >
            <Info className={classes.icon} /> About
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography
            color="primary"
            variant="h6"
            className={classes.itemContainer}
          >
            <AccountBox className={classes.icon} /> Contact
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavMenu;
