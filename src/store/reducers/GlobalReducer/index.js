import { GET_SUMMARY, GET_SUMMARY_FAIL, SET_LOADING } from "../../actionTypes";

const initialState = {
  summary: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUMMARY:
      return { ...state, summary: action.payload.summary };

    case SET_LOADING:
      return { ...state, loading: action.payload.loading };

    case GET_SUMMARY_FAIL:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};
