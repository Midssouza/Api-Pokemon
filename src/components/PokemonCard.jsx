
function PokemonCard({ pokemon }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width="150"
      />
    </div>
  );
}

export default PokemonCard;
