import {
  GET_HISTORICAL_STATS,
  SET_LOADING_HISTORICAL_STATS,
  GET_HISTORICAL_STATS_FAIL,
  SET_SELECTED_COUNTRY,
  SET_CHART_TYPE,
} from "../../actionTypes";

const initialState = {
  historicalStats: null,
  loadingHistoricalStats: false,
  errorMessage: null,
};

const historicalStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_HISTORICAL_STATS:
      return {
        ...state,
        loadingHistoricalStats: action.payload.loadingHistoricalStats,
      };

    case GET_HISTORICAL_STATS:
      return { ...state, historicalStats: action.payload.historicalStats };

    case GET_HISTORICAL_STATS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };

    case SET_SELECTED_COUNTRY:
      return { ...state, selectedCountry: action.payload.selectedCountry };

    case SET_CHART_TYPE:
      return { ...state, ChartType: action.payload.ChartType };

    default:
      return state;
  }
};

export default historicalStatsReducer;
