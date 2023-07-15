import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import { dehydrate } from '@tanstack/query-core';
import PokemonList from './pokemon-list';
import { Pokemon } from '../types';
import { POKEMON_URL } from '../constants/globalConstants';

async function getPokemon() {
  const res = await fetch(POKEMON_URL);
  const Pokemon = (await res.json()) as Pokemon[];
  return Pokemon;
}

export default async function Hydration() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['hydrate-pokemons'], getPokemon);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PokemonList />
    </Hydrate>
  );
}
