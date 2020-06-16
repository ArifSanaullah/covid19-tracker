import {
  GET_COUNTRIES,
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
