import React from "react";
import axios from "axios";
import Loader from "./components/Loader/index"
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rootData: null,
      countries: [],
    };
  }

  setRootData(data) {
    this.setState((prevState) => ({ ...prevState, rootData: data }));
  }

  setCouneries(countries) {
    this.setState((prevState) => ({ ...prevState, countries }));
  }

  async getSummary() {
    const { data } = await axios.get("https://api.covid19api.com/summary");
    const jsonData = JSON.stringify(data, null, "  ");
    this.setRootData(jsonData);
  }

  componentDidMount() {
    try {
      this.getSummary();
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          {!this.state.rootData && <Loader />}
          <pre>{this.state.rootData}</pre>
        </div>
      </div>
    );
  }
}

export default App;
