import React from "react";
import { Grid, Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paginationButton: {
    backgroundColor: "transparant",
    borderColor: blue[700],
    color: blue[700],
    fontSize: "1.4rem",
    fontFamily: "Roboto",
  },
});

function Pagination({ totalItems, itemsPerPage }) {
  const classes = useStyles();

  const pageNumbers = [];
  for (
    let pageNumber = 0;
    pageNumber < Math.ceil(totalItems / itemsPerPage);
    pageNumber++
  ) {
    pageNumbers.push(pageNumber);
  }

  return (
    <Grid item xs={12}>
      {pageNumbers &&
        pageNumbers.map((pageNumber) => (
          <Button
            key={pageNumber}
            variant="outlined"
            classNAme={classes.paginationButton}
          >
            {pageNumber + 1}
          </Button>
        ))}
    </Grid>
  );
}

export default Pagination;
