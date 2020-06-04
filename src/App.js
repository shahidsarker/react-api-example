import React, { Component } from "react";
import "./App.css";
import Dictionary from "./components/Dictionary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ReactJS with APIs</h1>
        <Dictionary word="test" />
      </div>
    );
  }
}

export default App;
