import React from "react";

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li>
                <img src={this.props.pokemon.imageUrl}/>
                <span>{this.props.pokemon.name}</span>
                <span>{this.props.pokemon.type}</span>
                <span>{this.props.pokemon.attack}</span>
                <span>{this.props.pokemon.defense}</span>
            </li>
        )
    }
}

export default PokemonDetail

// pokemon: {  
//     1:{
//       attack: 49
//       defense: 49
//       id: 1
//       imageUrl: "/assets/pokemon_snaps/1-746592ddbf88f824b4897ee29c2e9018b6a88098e45136531eb45f46bb6f2e4e.svg"
//       name: "Bulbasaur"
//       pokeType: "grass"