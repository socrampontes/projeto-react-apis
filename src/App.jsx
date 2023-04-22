import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { getPokemonData, getPokemons } from "./API/api";
import { Router } from "./Routes/Router";

const GlobalStyled = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonsDetails, setPokemonsDetails] = useState("");
  const [allPokemons, setAllPokemons] = useState(true);
  const [pokemonsPokedex, setPokemonsPokedex] = useState([]);

  useEffect(() => {
    setAllPokemons(true);
    if(localStorage.getItem("pokemons")){
    setPokemonsPokedex(JSON.parse(localStorage.getItem("pokemons")))}
  }, []);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const result = await Promise.all(promises);

      setPokemons(result);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPokemons();
  }, [Promise]);

  return (
    <>
      <GlobalStyled />
      <Router
        pokemons={pokemons}
        setPokemons={setPokemons}
        loading={loading}
        pokemonsDetails={pokemonsDetails}
        setPokemonsDetails={setPokemonsDetails}
        allPokemons={allPokemons}
        setAllPokemons={setAllPokemons}
        pokemonsPokedex={pokemonsPokedex}
          setPokemonsPokedex={setPokemonsPokedex}
        
      />
    </>
  );
}

export default App;
