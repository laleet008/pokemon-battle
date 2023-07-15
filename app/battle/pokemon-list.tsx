'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Pokemon, Results } from '../types';
import { POKEMON_URL } from '../constants/globalConstants';

async function getPokemon() {
  const res = await fetch(POKEMON_URL);
  const Pokemon = (await res.json()) as Pokemon;
  return Pokemon;
}

const PokemonList = () => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['hydrate-pokemons'],
    queryFn: () => getPokemon(),
  });

  return (
    <>
      <h2 className="text-center text-white mt-16 text-xl">
        Let's Begin The Battle
      </h2>
      {error ? (
        <p>Something went worng </p>
      ) : isLoading || isFetching ? (
        <p>Loading....</p>
      ) : (
        data && (
          <div>
            <h4>Select a player</h4>
            <select name="pokemon1" id="player 1">
              {data?.results?.map((poke: Results) => {
                return (
                  <option key={poke.name} value={poke.name}>
                    {poke.name}
                  </option>
                );
              })}
            </select>
          </div>
        )
      )}
    </>
  );
};

export default PokemonList;
