import PokemonIndex from "./pokemon_index";


const PokemonIndexItem = (props) => {
    return(
        <li></li>
    )
}


export default PokemonIndexItem

{this.props.pokemon.map((poke) => (
    <li className="pokemon-index-item">
      <span>{poke.id}</span>
      <img src={poke.imageUrl}/>
      <span>{poke.name}</span>
    </li>
  ))}