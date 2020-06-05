import React from "react";
import { connect } from "react-redux";
import Loader from "./components/Loader/index";
import "./App.css";
import summaryMiddleware from "./store/middlewares/summary";
import countryMiddleware from "./store/middlewares/country";
import actions from "./store/actions/index";

const {
  sharedActions: { setLoading, setError },
} = actions;
class App extends React.Component {
  async componentDidMount() {
    const { summaryMiddleware, countryMiddleware, setupLoading } = this.props;
    setupLoading(true);
    await summaryMiddleware();
    await countryMiddleware();
    setupLoading(false);
  }
  render() {
    const { summary, countries, isLoading, error } = this.props;
    return (
      <div>
        <div className="App">
          {isLoading && !error && <Loader />}
          {!isLoading && !error && summary && <h1>Summary</h1>}
          {!isLoading && !error && summary && <pre>{summary.Date}</pre>}

          {isLoading && !error && <Loader />}
          {!isLoading && !error && countries && <h1>Countries</h1>}
          {!isLoading && !error && countries && <pre>{countries.length}</pre>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.summaryReducers,
  ...state.countryReducers,
  ...state.sharedReducers,
});

const mapDispatchToProps = (dispatch) => ({
  summaryMiddleware: () => dispatch(summaryMiddleware()),
  countryMiddleware: () => dispatch(countryMiddleware()),
  setupLoading: (loading) => dispatch(setLoading(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
