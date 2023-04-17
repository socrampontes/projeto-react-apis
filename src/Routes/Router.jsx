import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../componentes/Home/Home";
import {PokedexPage} from "../componentes/Pokedex/Pokedex";
import { DetailsPage } from "../componentes/Details/Details";
import {HeaderPage} from "../componentes/Header/Header"

export const Router = (props) => {
  const { pokemons, setPokemons, loading , pokemonsPokedex, setPokemonsPokedex} = props;
 
  
  return (
    <BrowserRouter>
    <HeaderPage/>
      <Routes>
        <Route index element={<HomePage pokemons={pokemons} setPokemons={setPokemons} loading={loading} setPokemonsPokedex={setPokemonsPokedex}/>} />
        <Route path="/pokedex" element={<PokedexPage pokemonsPokedex={pokemonsPokedex} setPokemonsPokedex={setPokemonsPokedex}/>}/>
        <Route path="/details/:pokemonName" element={<DetailsPage pokemonsPokedex={pokemonsPokedex} pokemons={pokemons} loading={loading}/>}/>
      </Routes>
    </BrowserRouter>
  );
};
