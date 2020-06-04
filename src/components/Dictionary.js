import React, { Component } from "react";
import axios from "axios";

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = { word: "", definitions: [] };
  }

  componentDidMount() {
    const word = this.props.word;
    const API_KEY = process.env.REACT_APP_DICTIONARY_API_KEY;
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}`;

    axios
      .get(url, { params: { key: API_KEY } })
      .then((response) => {
        const data = response.data;
        console.log(data);
        const definitions = data[0].shortdef;
        this.setState({ word, definitions });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let defList;
    if (this.state.definitions.length === 0) {
      defList = <></>;
    } else {
      defList = (
        <ol>
          {this.state.definitions.map((def) => (
            <li>{def}</li>
          ))}
        </ol>
      );
    }

    return (
      <div className="dictionary">
        <h1>Dictionary</h1>
        <h3>{this.props.word}</h3>
        {defList}
      </div>
    );
  }
}

export default Dictionary;
