import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: { name: "" } };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
      const data = response.data;
      const pokemon = {
        name: data.name,
        imageUrl: data.sprites.front_default,
      };
      this.setState({ pokemon });
    });
  }

  render() {
    return (
      <div className="pokemon">
        <img src={this.state.pokemon.imageUrl} />
        <ul>
          <li>Pokemon name: {this.state.pokemon.name} </li>
          <li></li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ReactJS with APIs</h1>
        <Pokemon />
      </div>
    );
  }
}

export default App;
