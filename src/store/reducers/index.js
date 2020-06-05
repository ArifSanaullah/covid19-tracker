import { combineReducers } from "redux";
import countryReducers from "./country";
import summaryReducers from "./summary";

const rootReducer = combineReducers({ countryReducers, summaryReducers });

export default rootReducer;
