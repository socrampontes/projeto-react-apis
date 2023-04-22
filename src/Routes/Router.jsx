import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../componentes/Home/Home";
import { PokedexPage } from "../componentes/Pokedex/Pokedex";
import { DetailsPage } from "../componentes/Details/Details";
import { HeaderPage } from "../componentes/Header/Header";
import { ErrorPage } from "../Pages/ErrorPage";
import { useEffect, useState } from "react";

export const Router = (props) => {
  const [button , setButton] =useState(true)
  const [visible , setVisible] =useState(true)
  const {
    pokemons,
    setPokemons,
    loading,
    pokemonsPokedex,
    setPokemonsPokedex,
    allPokemons,
    setAllPokemons,
  } = props;
  const toUpperCase = (string) =>{
    return  string[0].toUpperCase() + string.substr(1)
  }


  return (
    <BrowserRouter>
      <HeaderPage allPokemons={allPokemons} visible={visible }/>
      <Routes>
        <Route
          index
          element={
            <HomePage
              pokemons={pokemons}
              loading={loading}
              setPokemonsPokedex={setPokemonsPokedex}
              setAllPokemons={setAllPokemons}
              pokemonsPokedex={pokemonsPokedex}
              button={button}
              setButton={setButton}
              toUpperCase={toUpperCase}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
            pokemons={pokemonsPokedex}
              loading={loading}
              setPokemonsPokedex={setPokemonsPokedex}
              setAllPokemons={setAllPokemons}
              allPokemons={allPokemons}
              todosPokemons={pokemons}
              setVisible={setVisible}
              toUpperCase={toUpperCase}
            />
            
          }
          
        />
        <Route
          path="/details/:pokemonName"
          element={
            <DetailsPage
              pokemonsPokedex={pokemonsPokedex}
              pokemons={pokemons}
              loading={loading}
              setAllPokemons={setAllPokemons}
              toUpperCase={toUpperCase}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
