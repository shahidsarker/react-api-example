import React from "react";
import "./App.css";
import Dictionary from "./components/Dictionary";
import Pokemon from "./components/Pokemon";

const App = (props) => {
  return (
    <div className="App">
      <h1>ReactJS with APIs</h1>
      <Dictionary />
      <Pokemon />
    </div>
  );
};

export default App;
