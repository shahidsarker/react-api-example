import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {} };
  }

  // pokemonName = ;

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.props.name)
      .then((response) => {
        const data = response.data;

        const newPokemonObj = {
          name: data.name,
          imageUrl: data.sprites.front_default,
        };

        this.setState({ pokemon: newPokemonObj });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="pokemon">
        <img src={this.state.pokemon.imageUrl} alt={this.state.pokemon.name} />
        <ul>
          <li>Pokemon name: {this.state.pokemon.name} </li>
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
        <Pokemon name="ditto" />
        <Pokemon name="pikachu" />
        <Pokemon name="mewtwo" />
        <Pokemon name="shahid" />
      </div>
    );
  }
}

export default App;
