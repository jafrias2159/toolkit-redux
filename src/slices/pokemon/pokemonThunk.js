import { pokemonApi } from '../../api/pokemonApi';
import { setPokemon, startLoadingPokemon } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return (dispatch, getState) => {
    dispatch(startLoadingPokemon());
    setTimeout(async () => {
      const { data } = await pokemonApi.get(
        `/pokemon?limit=10&offset=${page * 10}`
      );
      dispatch(setPokemon({ page: page + 1, pokemons: data.results }));
    }, 2000);
  };
};
