import axios from "../../utilities/axios";
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

export const getAllCountries = (payload) => {
  return { type: GET_COUNTRIES, payload: { countries: payload } };
};

export const getCountryStatus = (country, status) => ({
  type: GET_COUNTRY_STATUS,
  payload: { country, status },
});
