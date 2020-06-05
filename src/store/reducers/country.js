import {
  GET_COUNTRIES,
  GET_COUNTRY_STATUS,
  GET_COUNTRY_DAY_ONE_STATUS,
  GET_COUNTRY_DAY_ONE_TOTAL_STATUS,
  GET_COUNTRY_STATUS_TOTAL,
  LIVE_COUNTRY_STATUS_AFTER_DATE,
  LIVE_COUNTRY_STATUS,
  SET_ERROR,
} from "../actionTypes";

const initialState = {
  countries: [],
  country: {},
  error: null,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload.countries };
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default countryReducer;
