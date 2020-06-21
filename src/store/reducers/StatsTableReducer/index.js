import { SET_COUNTRIES_PER_PAGE, SET_CURRENT_PAGE } from "../../actionTypes";

export const initialState = {
  countriesPerPage: 10,
  currentPage: 1,
};

const statsTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      console.log(action);
      return { ...state, currentPage: action.payload.currentPage };

    case SET_COUNTRIES_PER_PAGE:
      return { ...state, countriesPerPage: action.payload.countriesPerPage };
    default:
      return state;
  }
};

export default statsTableReducer;
