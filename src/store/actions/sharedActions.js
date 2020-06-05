import { IS_LOADING, SET_ERROR } from "../actionTypes";

export const setLoading = (isLoading) => {
  return { type: IS_LOADING, payload: { isLoading } };
};

export const setError = (error) => {
  return { type: SET_ERROR, payload: { error } };
};
