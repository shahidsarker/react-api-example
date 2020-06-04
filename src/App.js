import React, { Component } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ReactJS with APIs</h1>
        <Pokemon name="ditto" />
        <Pokemon name="pikachu" />
        <Pokemon name="mewtwo" />
        <Pokemon name="shahid" />
      </div>
    );
  }
}

export default App;
