import axios from "../../utilities/axios";
import actions from "../actions/index";

const {
  countryActions: { getAllCountries },
  sharedActions: { setError },
} = actions;

const getAllCountriesData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/countries");
      return dispatch(getAllCountries(data));
    } catch (err) {
      return dispatch(setError(err.message));
    }
  };
};

export default getAllCountriesData;
