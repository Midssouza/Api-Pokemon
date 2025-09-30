
import { fetchPokemon } from "../models/pokemonModel";

export async function getPokemonData(pokemonName) {
  if (!pokemonName || pokemonName.trim() === "") {
    throw new Error("Digite um nome de Pokémon!");
  }

  return await fetchPokemon(pokemonName);
}
