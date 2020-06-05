import React from "react";
import { connect } from "react-redux";
import Loader from "./components/Loader/index";
import "./App.css";
import summaryMiddleware from "./store/middlewares/summary";
import countryMiddleware from "./store/middlewares/country";

class App extends React.Component {
  async componentDidMount() {
    await this.props.summaryMiddleware();
    await this.props.countryMiddleware();
  }
  render() {
    return (
      <div>
        <div className="App">
          <h1>Summary</h1>
          {!this.props.summary && <Loader />}
          <pre>{this.props.summary.Date}</pre>

          <h1>Countries</h1>
          {!this.props.countries && <Loader />}
          <pre>{this.props.countries.length}</pre>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.summaryReducers,
  ...state.countryReducers,
});

const mapDispatchToProps = (dispatch) => ({
  summaryMiddleware: () => dispatch(summaryMiddleware()),
  countryMiddleware: () => dispatch(countryMiddleware()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
