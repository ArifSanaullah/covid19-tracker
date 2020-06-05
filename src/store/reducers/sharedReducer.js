import { IS_LOADING, SET_ERROR } from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
};

const sharedReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default sharedReducers;
