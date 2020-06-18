import { GET_SUMMARY, GET_SUMMARY_FAIL } from "../../actionTypes";

const initialState = {
  summary: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUMMARY:
      return { ...state, summary: action.payload.summary };

    case GET_SUMMARY_FAIL:
      return { ...state, errorMessage: action.payload.message };
    default:
      return state;
  }
};
