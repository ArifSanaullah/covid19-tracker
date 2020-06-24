import React, { useReducer, useEffect } from "react";
import { Grid } from "@material-ui/core";
import LiveUpdate from "./LiveUpdate";
import StatsTable from "./StatsTable";
import WorldMap from "./WorldMap";
import Chart from "./Chart";
import { MapDataContextProvider } from "../../store/contexts/MapDataContext";
import { HistoricalStatsProvider } from "../../store/contexts/HistoricalStats";
import mapDataReducer from "../../store/reducers/WorldMapReducer";
import historicalStatsReducer from "../../store/reducers/HistoricalStats";
import jhAxios from "../../utilities/JH-axios-instance";
import {
  GET_WORLD_MAP_DATA,
  SET_LOADING_MAP_DATA,
  GET_WORLD_MAP_DATA_FAIL,
  SET_LOADING_HISTORICAL_STATS,
  GET_HISTORICAL_STATS,
  GET_HISTORICAL_STATS_FAIL,
} from "../../store/actionTypes";

function Sections() {
  const [mapState, mapDispatch] = useReducer(mapDataReducer, {
    mapData: null,
    loadingMapData: false,
    error: null,
    viewPort: {
      width: "100vw",
      height: "100vh",
      latitude: 30.3753,
      longitude: 69.3451,
      zoom: 4,
    },
  });

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        mapDispatch({
          type: SET_LOADING_MAP_DATA,
          payload: { loadingMapData: true },
        });

        const { data } = await jhAxios.get("/v2/countries");
        mapDispatch({ type: GET_WORLD_MAP_DATA, payload: { mapData: data } });

        mapDispatch({
          type: SET_LOADING_MAP_DATA,
          payload: { loadingMapData: false },
        });
      } catch (err) {
        mapDispatch({
          type: SET_LOADING_MAP_DATA,
          payload: { loadingMapData: false },
        });

        mapDispatch({
          type: GET_WORLD_MAP_DATA_FAIL,
          payload: { error: err.message },
        });
      }
    };

    fetchMapData();
  }, []);

  const [historicalState, historicalDispatch] = useReducer(
    historicalStatsReducer,
    {
      historicalStats: null,
      loadingHistoricalStats: false,
      errorMessage: null,
      selectedCountry: "",
      ChartType: "Line",
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        historicalDispatch({
          type: SET_LOADING_HISTORICAL_STATS,
          payload: { loadingHistoricalStats: true },
        });

        const { data } = await jhAxios.get("/v2/historical?lastdays=all");

        historicalDispatch({
          type: GET_HISTORICAL_STATS,
          payload: { historicalStats: data },
        });

        historicalDispatch({
          type: SET_LOADING_HISTORICAL_STATS,
          payload: { loadingHistoricalStats: false },
        });
      } catch (err) {
        historicalDispatch({
          type: SET_LOADING_HISTORICAL_STATS,
          payload: { loadingHistoricalStats: false },
        });

        historicalDispatch({
          type: GET_HISTORICAL_STATS_FAIL,
          payload: { errorMessage: err.message },
        });
      }
    };

    fetchData();
  }, []);

  return (
    <Grid item container xs={12} justify="center">
      <LiveUpdate />
      <StatsTable />
      <MapDataContextProvider state={{ ...mapState, dispatch: mapDispatch }}>
        <WorldMap />
      </MapDataContextProvider>
      <HistoricalStatsProvider
        state={{ ...historicalState, dispatch: historicalDispatch }}
      >
        <Chart />
      </HistoricalStatsProvider>
    </Grid>
  );
}

export default Sections;
