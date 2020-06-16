import { GET_SUMMARY } from "../actionTypes";

export const getSummary = (summary) => {
  return { type: GET_SUMMARY, payload: { summary } };
};
