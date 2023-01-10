export const PokemonAPI = {
  // needs to be extended with an optinal retry and cooldown mechanism
	getRandomPokemon: async (callback: Function) => {
		const randomPokemonId: number = Math.floor(Math.random() * 500);
    const path: string = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;
    await fetch(path)
      .then(res => res.json())
      .then(res => {
        callback(res);
      });
  }
};