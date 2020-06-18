import React, { useReducer, useEffect } from "react";
import { Grid } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import "./App.css";
import Navigation from "./components/Header/Navigation";
import RobotoRegularttf from "./resources/fonts/Roboto/Roboto-Regular.ttf";
import Sections from "./components/Sections";
import PoppinsRegularttf from "./resources/fonts/Poppins/Poppins-Regular.ttf";
import Hero from "./components/Sections/Hero";
import { grey } from "@material-ui/core/colors";
import { GlobalContextProvider } from "./store/contexts/GlobalContext";
import GlobalReducer from "./store/reducers/GlobalReducer";
import axios from "./utilities/axios";
import { GET_SUMMARY, GET_SUMMARY_FAIL } from "./store/actionTypes";

const roboto = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Roboto'),
    local('Roboto-Regular'),
    url(${RobotoRegularttf}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const poppins = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Poppins'),
    local('Poppins-Regular'),
    url(${PoppinsRegularttf}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto, Arial",
    h1: {
      fontFamily: "Poppins, Arial",
      fontSize: "4rem",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [roboto, poppins],
      },
    },
  },
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[900],
    },
  },
});

function App() {
  const [state, dispatch] = useReducer(GlobalReducer, { summary: null });
  useEffect(() => {
    const getSummary = async () => {
      try {
        const { data } = await axios.get("/summary");
        dispatch({ type: GET_SUMMARY, payload: { summary: data } });
      } catch (err) {
        dispatch({ type: GET_SUMMARY_FAIL, payload: { message: err.message } });
      }
    };
    getSummary();
  }, []);

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <GlobalContextProvider state={{ state }}>
        <Grid container>
          <Grid className="hero" item container>
            <Grid item xs={12} lg={12}>
              <Navigation />
            </Grid>
            <Grid xs={12} lg={12} item container justify="center">
              <Hero />
            </Grid>
          </Grid>
          <Sections />
        </Grid>
      </GlobalContextProvider>
    </ThemeProvider>
  );
}

export default App;
