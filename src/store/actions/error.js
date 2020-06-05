import { SET_ERROR } from "../actionTypes";

export const setError = (error) => ({ type: SET_ERROR, payload: { error } });

const errorActions = { setError };

export default errorActions;
