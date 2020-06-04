import React, { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: null };
  }

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

    return <div className="pokemon">{display}</div>;
  }
}

export default Pokemon;
