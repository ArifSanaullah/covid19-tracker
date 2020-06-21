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

import { GlobalContext } from "../../store/contexts/GlobalContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const {
    state: { summary },
  } = useContext(GlobalContext);

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
              {summary &&
                Object.keys(summary.Countries[0]).map((key) => (
                  <TableCell key={key}>
                    {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {summary &&
              summary.Countries.slice(
                countries * countriesPerPage,
                countries * countriesPerPage + countriesPerPage
              ).map((country) => {
                return (
                  <TableRow key={Math.random() * 10000}>
                    {Object.values(country).map((value) => (
                      <TableCell key={Math.random() * 10000}>{value}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {summary && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={summary.Countries.length}
          rowsPerPage={countriesPerPage}
          page={countries}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
