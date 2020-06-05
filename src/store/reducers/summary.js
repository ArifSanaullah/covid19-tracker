import { GET_SUMMARY } from "../actionTypes";

const initialState = {
  summary: {},
};

const summaryReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUMMARY:
      return { ...state, summary: action.payload.summary };
    default:
      return state;
  }
};

export default summaryReducers;
