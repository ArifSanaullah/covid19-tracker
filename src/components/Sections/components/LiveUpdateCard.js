import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import numberWithComas from "../../../utilities/numberWithComas";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: "2rem",
    textAlign: "center",
  },
  value: {
    fontSize: "4rem",
    textAlign: "center",
  },
});

export default function LiveUpdateCard({
  cardData,
  styles: { backgroundColor, color },
}) {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ backgroundColor }}
    >
      <CardContent>
        <Typography
          className={classes.value}
          color="textSecondary"
          gutterBottom
          style={{ color }}
        >
          {cardData && numberWithComas(cardData[1])}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          {cardData && cardData[0].replace(/([a-z])([A-Z])/g, "$1 $2")}
        </Typography>
      </CardContent>
    </Card>
  );
}
