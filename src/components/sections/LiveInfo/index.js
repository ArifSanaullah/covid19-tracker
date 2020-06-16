import React from "react";
import { connect } from "react-redux";
import summaryMiddleware from "../../../store/middlewares/summary";
import { setLoading, setError } from "../../../store/actions/sharedActions";
import LiveInfoCard from "../components/LiveInfoCard";
import Loader from "../../Loader";

class LiveInfo extends React.Component {
  async componentDidMount() {
    const { summaryMiddleware, setLoading, setError } = this.props;
    try {
      setLoading(true);
      await summaryMiddleware();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  render() {
    const {
      summary: { Global },
      error,
      isLoading,
    } = this.props;

    let globalSummary;
    if (Global) {
      globalSummary = Object.entries(Global);
    }

    return (
      <div className="section live-info-section">
        <div className="live-info-cards-container">
          {isLoading && !error && !globalSummary && (
            <div className="loader-container">
              <Loader />
            </div>
          )}

          {!isLoading && error && !globalSummary && (
            <div className="error-container">
              <h1 className="error-message">{error} :(</h1>
            </div>
          )}

          {!isLoading &&
            !error &&
            globalSummary &&
            globalSummary.map((entry, index) => (
              <LiveInfoCard data={entry} key={index} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.summaryReducers,
  ...state.sharedReducers,
});

const mapDispatchToProps = (dispatch) => ({
  summaryMiddleware: () => dispatch(summaryMiddleware()),
  setLoading: (loading) => dispatch(setLoading(loading)),
  setError: (error) => dispatch(setError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveInfo);
