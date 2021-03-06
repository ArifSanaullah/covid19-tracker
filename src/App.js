import React, { useReducer, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";

import "./App.css";
import Navigation from "./components/Header/Navigation";
import Sections from "./components/Sections";
import Hero from "./components/Sections/Hero";
import { GlobalContextProvider } from "./store/contexts/GlobalContext";
import GlobalReducer from "./store/reducers/GlobalReducer";
import axios from "./utilities/axios";
import {
  GET_SUMMARY,
  GET_SUMMARY_FAIL,
  SET_LOADING,
} from "./store/actionTypes";
import theme from "./utilities/theme";

function App() {
  const [state, dispatch] = useReducer(GlobalReducer, {
    summary: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    const getSummary = async () => {
      try {
        dispatch({ type: SET_LOADING, payload: { loading: true } });
        const { data } = await axios.get("/summary");

        dispatch({ type: GET_SUMMARY, payload: { summary: data } });
        dispatch({ type: SET_LOADING, payload: { loading: false } });
      } catch (err) {
        dispatch({ type: GET_SUMMARY_FAIL, payload: { message: err.message } });
        dispatch({ type: SET_LOADING, payload: { loading: false } });
      }
    };

    getSummary();
  }, []);

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <GlobalContextProvider state={{ state, dispatch }}>
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
