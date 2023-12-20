import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onSubmit }) {
  // add state for all inputs of form
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontImageURL, setFrontImageURL] = useState("");
  const [backImageURL, setBackImageURL] = useState("");

  // add POST request to add new pokemon to server
  function handleSubmit(e) {
    e.preventDefault();
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontImageURL,
        back: backImageURL
      }
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
      .then(r => r.json())
      .then((pokemon) => onSubmit(pokemon));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={(e) => setName(e.target.value)} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={(e) => setHp(e.target.value)} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={(e) => setFrontImageURL(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={(e) => setBackImageURL(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
