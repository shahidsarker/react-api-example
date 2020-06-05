import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = { word: "", definitions: [], searchInput: "" };
  }

  handleInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSearch = () => {
    const searchInput = this.state.searchInput;
    const API_KEY = process.env.REACT_APP_DICTIONARY_API_KEY;
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${searchInput}`;

    axios
      .get(url, { params: { key: API_KEY } })
      .then((response) => {
        const data = response.data;
        const definitions = data[0].shortdef;
        this.setState({ word: searchInput, definitions, searchInput: "" });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ definitions: [] });
      });
  };

  render() {
    let defList;
    if (this.state.definitions.length === 0) {
      defList = <></>;
    } else {
      defList = (
        <ol>
          {this.state.definitions.map((def, index) => {
            return <li key={index}>{def}</li>;
          })}
        </ol>
      );
    }

    return (
      <div className="dictionary">
        <h1>Dictionary</h1>
        <Search
          value={this.state.searchInput}
          onChange={this.handleInput}
          onSearch={this.handleSearch}
        />
        <h3>{this.state.word}</h3>
        {defList}
      </div>
    );
  }
}

export default Dictionary;
