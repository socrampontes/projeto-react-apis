import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from ".././Pages/Home/Home";
import { PokedexPage } from "../Pages/Pokedex/Pokedex";
import { DetailsPage } from "../componentes/Details/Details";
import { HeaderPage } from "../componentes/Header/Header";
import { ErrorPage } from "../Pages/ErrorPage";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Router = () => {
  const context = useContext(GlobalContext)
  const { allPokemons, visible } = context
  return (
    <BrowserRouter>
      <HeaderPage allPokemons={allPokemons} visible={visible}  />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:pokemonName" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
