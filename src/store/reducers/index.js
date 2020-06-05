import { combineReducers } from "redux";
import countryReducers from "./country";
import summaryReducers from "./summary";
import sharedReducers from "./sharedReducer";

const rootReducer = combineReducers({
  countryReducers,
  summaryReducers,
  sharedReducers,
});

export default rootReducer;
