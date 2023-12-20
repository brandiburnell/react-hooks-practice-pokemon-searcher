import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const pokemonCards = pokemons.map((pokemon) => {
    return (
      <PokemonCard 
        name={pokemon.name}
        sprites={pokemon.sprites}
        hp={pokemon.hp}
        key={pokemon.id}
        id={pokemon.id}
      />
    );
  });

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
