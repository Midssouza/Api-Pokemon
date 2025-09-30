
import { useState } from "react";
import PokemonForm from "./components/PokemonForm";
import PokemonCard from "./components/PokemonCard";
import { getPokemonData } from "./controllers/pokemonController";

function App() {
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = async (name) => {
    try {
      const data = await getPokemonData(name);
      setPokemon(data);
    } catch (error) {
      alert(error.message);
      setPokemon(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Buscador de Pokémon</h1>
      <PokemonForm onSearch={handleSearch} />
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;


