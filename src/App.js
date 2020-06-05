import React from "react";
import "./App.css";
import Dictionary from "./components/Dictionary";

const App = (props) => {
  return (
    <div className="App">
      <h1>ReactJS with APIs</h1>
      <Dictionary word="test" />
    </div>
  );
};

export default App;
