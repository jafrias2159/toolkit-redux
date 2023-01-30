import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './slices/pokemon/pokemonThunk';

const PokemonList = ({ pokemonList = [], isLoading = false }) => {
  const pokemonElements = pokemonList.map((pokemon) => {
    return <li key={pokemon.name}>{pokemon.name}</li>;
  });

  const isPokemonListValid = isLoading || pokemonList.length === 0;

  return isPokemonListValid ? <></> : <ul>{pokemonElements}</ul>;
};

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <div>{isLoading ? 'Loading' : 'Showing'}</div>
      <hr />
      <PokemonList pokemonList={pokemons} isLoading={isLoading} />
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next page {page + 1}
      </button>
    </>
  );
};
