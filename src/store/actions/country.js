import {
  GET_COUNTRIES,
  GET_COUNTRY_STATUS,
} from "../actionTypes";

export const getAllCountries = (payload) => {
  return { type: GET_COUNTRIES, payload: { countries: payload } };
};

export const getCountryStatus = (country, status) => ({
  type: GET_COUNTRY_STATUS,
  payload: { country, status },
});
