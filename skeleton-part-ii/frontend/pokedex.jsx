import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {requestSinglePokemon, receivePokemon} from './actions/pokemon_actions';
import PokemonReducer from './reducers/pokemon_reducer'
import {fetchPokemon} from './util/api_util'

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl)

  window.requestSinglePokemon = requestSinglePokemon;
  window.receivePokemon = receivePokemon;
  window.PokemonReducer = PokemonReducer;
  window.fetchPokemon = fetchPokemon
})