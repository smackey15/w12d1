import { connect } from "react-redux";
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
    return ({
        pokemon: state.entities.pokemon[ownProps.match.params.id]
})
}

export default connect(mapStateToProps)(PokemonDetail);
