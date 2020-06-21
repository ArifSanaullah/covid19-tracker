import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

import { GlobalContext } from "../../store/contexts/GlobalContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  tableHeadingCell: {
    fontSize: "1.4rem",
    backgroundColor: blue[900],
    color: grey[100],
    textTransform: "uppercase",
  },
  tableDataRow: {
    transition: "all .5s ease-out",
    "&:hover": {
      backgroundColor: grey[400],
    },
  },
  tableDataCell: {
    fontSize: "1.2rem",
    padding: ".75rem 1.2rem",
  },
});

export default function StickyHeadTable() {
  const {
    state: { summary },
  } = useContext(GlobalContext);

  const fetchedCountries = summary?.Countries || [];

  const classes = useStyles();
  const [countries, setCountries] = React.useState(0);
  const [countriesPerPage, setCountriesPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setCountries(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setCountriesPerPage(event.target.value);
    setCountries(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {fetchedCountries.length //using short-circuit here was causing a warning.
                ? Object.keys(fetchedCountries[0]).map((key) => (
                    <TableCell key={key} className={classes.tableHeadingCell}>
                      {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </TableCell>
                  ))
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchedCountries.length
              ? fetchedCountries
                  .slice(
                    countries * countriesPerPage,
                    countries * countriesPerPage + countriesPerPage
                  )
                  .map((country) => {
                    return (
                      <TableRow
                        key={Math.random() * 10000}
                        className={classes.tableDataRow}
                      >
                        {Object.values(country).map((value) => (
                          <TableCell
                            key={Math.random() * 10000}
                            className={classes.tableDataCell}
                          >
                            {value}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      {fetchedCountries.length && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={fetchedCountries.length}
          rowsPerPage={countriesPerPage}
          page={countries}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
