import axios from "../../utilities/axios";
import actions from "../actions/index";

const {
  summaryActions: { getSummary },
  errorActions: { setError },
} = actions;

const summaryMiddleware = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/summary");
      return dispatch(getSummary(res.data));
    } catch (err) {
      return dispatch(setError(err.message));
    }
  };
};

export default summaryMiddleware;
