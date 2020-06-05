import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: null, searchInput: "" };
  }

  handleInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSearch = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.state.searchInput)
      .then((response) => {
        const data = response.data;

        const newPokemonObj = {
          name: data.name,
          imageUrl: data.sprites.front_default,
        };

        this.setState({ pokemon: newPokemonObj });
      })
      .catch((err) => console.log(err));
  };

  render() {
    let display;
    if (!this.state.pokemon) {
      display = <p>Loading...</p>;
    } else {
      display = (
        <>
          <img
            src={this.state.pokemon.imageUrl}
            alt={this.state.pokemon.name}
          />
          <ul>
            <li>{this.state.pokemon.name} </li>
          </ul>
        </>
      );
    }

    return (
      <div className="pokemon">
        <Search
          value={this.state.searchInput}
          onChange={this.handleInput}
          onSearch={this.handleSearch}
        />
        {display}
      </div>
    );
  }
}

export default Pokemon;
