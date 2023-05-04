import { useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { getPokemonData, getPokemons } from "../API/api";

export const GlobalState = (props) => {
  const [button, setButton] = useState(true);
  const [visible, setVisible] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonsDetails, setPokemonsDetails] = useState("");
  const [allPokemons, setAllPokemons] = useState(true);
  const [pokemonsPokedex, setPokemonsPokedex] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPokedex, setIsOpenPokedex] = useState(false);
  useEffect(() => {
    setAllPokemons(true);
    if (localStorage.getItem("pokemons")) {
      setPokemonsPokedex(JSON.parse(localStorage.getItem("pokemons")));
      setPokemonsDetails(localStorage.getItem("name"));
    }
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
  const toUpperCase = (string) => {
    return string[0].toUpperCase() + string.substr(1);
  };

  const details = (pokemonName) => {
    setPokemonsDetails(pokemonName);
    localStorage.setItem("name", pokemonName);
  };
  const addOrDeletePokemon = () => {
    if (
      pokemonsPokedex.map((pokemon) => pokemon.name).includes(pokemonsDetails)
    ) {
      return true;
    } else  
      return false;
  };

  const catchPokemon = (pokemon) => {
    
    pokemons.map((pokemons) => {
      
      if (pokemons.data.name === pokemon) {
        const pokedex = [...pokemonsPokedex, pokemons.data];
      
        setPokemonsPokedex(pokedex);
        localStorage.setItem("pokemons", JSON.stringify(pokedex));
        setButton(false);
      }
    });
  };

  const deletePokemon = (pokemonToDelete) => {
    const updatedPokedex = pokemonsPokedex.filter(
      (pokemon) => pokemon.name !== pokemonToDelete
    );
    setPokemonsPokedex(updatedPokedex);
    localStorage.setItem("pokemons", JSON.stringify(updatedPokedex));
  };

  const data = {
    pokemons,
    loading,
    pokemonsDetails,
    allPokemons,
    pokemonsPokedex,
    isOpen,
    isOpenPokedex,
    button,
    visible,
    setButton,
    setVisible,
    setPokemons,
    setLoading,
    setPokemonsDetails,
    setAllPokemons,
    setPokemonsPokedex,
    setIsOpen,
    setIsOpenPokedex,
    fetchPokemons,
    toUpperCase,
    details,
    addOrDeletePokemon,
    catchPokemon,
    deletePokemon,
  };
  
  return (
    <>
      <GlobalContext.Provider value={data}>
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};
