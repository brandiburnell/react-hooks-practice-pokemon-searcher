import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // get pokemon data from server on initial load
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then((pokemon) => setPokemons(pokemon));
  }, []);

  // filter pokemon array by search criteria
  function handleSearch(searchText) {
    // const filteredPokemon = pokemons.filter((pokemon) => pokemon.name.includes(searchText.toLowerCase()));
    setSearchTerm(searchText);
  }

  // add new pokemon to pokemon array
  function handleSubmit(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }
  
  const pokemonToDisplay = pokemons.filter((pokemon) => pokemon.name.includes(searchTerm.toLowerCase()));

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={handleSubmit}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection 
        pokemons={pokemonToDisplay}
      />
    </Container>
  );
}

export default PokemonPage;
