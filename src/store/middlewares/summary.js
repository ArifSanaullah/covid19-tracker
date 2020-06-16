import axios from "../../utilities/axios";
import actions from "../actions/index";

const {
  summaryActions: { getSummary },
  sharedActions: { setError },
} = actions;

const summaryMiddleware = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/summary");
      return dispatch(getSummary(data));
    } catch (err) {
      return dispatch(setError(err.message));
    }
  };
};

export default summaryMiddleware;
