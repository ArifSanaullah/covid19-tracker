import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

import { GlobalContext } from "../../store/contexts/GlobalContext";
import {
  StatsTableContext,
  StatsTableContextProvider,
} from "../../store/contexts/StatsTableContext";
import Pagination from "../Pagination";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: "1.4rem",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
  tableContainer: {},
  thead: {
    backgroundColor: blue[900],
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const {
    state: { summary },
  } = useContext(GlobalContext);

  const { countriesPerPage, currentPage } = useContext(StatsTableContext);
  
  let countries;
  if (summary) {
    const indexOfLastCountry = countriesPerPage * currentPage;
    const indexofFirstCountry = indexOfLastCountry - countriesPerPage;

    const slicedCountries = summary.Countries.slice(
      indexofFirstCountry,
      indexOfLastCountry
    );

    countries = slicedCountries;
  }

  return (
    <StatsTableContextProvider state={{ countriesPerPage, currentPage }}>
      <Grid item container xs={12} lg={10} className={classes.tableContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                {countries &&
                  Object.keys(countries[0]).map((heading) => (
                    <StyledTableCell
                      key={heading}
                      className={classes.thead}
                      align="left"
                    >
                      {heading.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </StyledTableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {countries &&
                countries.map((country) => (
                  <StyledTableRow key={country.Country}>
                    {Object.values(country).map((value) => (
                      <StyledTableCell
                        component="th"
                        key={Math.random() * 100000}
                      >
                        {value}
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          {countries && (
            <Pagination
              totalItems={summary.Countries.length}
              itemsPerPage={countriesPerPage}
            />
          )}
        </TableContainer>
      </Grid>
    </StatsTableContextProvider>
  );
}
