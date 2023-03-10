import { useState, useEffect } from "react";
const { PokemonAPI } = require("../../apis/PokemonAPI.ts");

const UpdatePokemonPanel = (): {} => {
  const [myName, setMyName] = useState<string>("");
  const [myImage, setmyImage] = useState<string>("");

  useEffect(() => {
    console.log("getting pokemon image");
    try {
      PokemonAPI.getRandomPokemon((response) => {
        setMyName(response.name);
        setmyImage(response.sprites.other.dream_world.front_default);
      });
    } catch (error) {
      // Handle here any limitations on the game in case of no pokemon data after retrying
      console.error(`couldn't load pokemons. ${error} `);
    }
  }, []);
  
  return {
    myName,
    myImage
  };
}

export default UpdatePokemonPanel;