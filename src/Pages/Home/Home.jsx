import { PropagateLoader } from "react-spinners";
import { Home, H1, Card, Loading } from "./Home-Styled";
import { CardPokemon } from "../../componentes/CardPokemon/Card";
import { Modal } from "../Modal/modal";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ModalPokedex } from "../Modal/modalPokedex";

export const HomePage = () => {
  const context = useContext(GlobalContext);
  const {
    pokemons,
    loading,
    setPokemonsPokedex,
    setAllPokemons,
    pokemonsPokedex,
    toUpperCase,
    isOpen,
    setIsOpen,
    setVisible,
    details,
    catchPokemon,
    deletePokemon ,
    isOpenPokedex,
    setIsOpenPokedex,
  } = context;

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <>
      <Home>
        {loading ? (
          <Loading>
            <PropagateLoader color="#36d7b7" size={35} />
          </Loading>
        ) : (
          <>
            <H1>Todos os pokemons</H1>
            <Card>
              
              {pokemons.map((Pokemon, index) => {
                return (
                  <CardPokemon
                    key={index}
                    pokemons={Pokemon}
                    setPokemonsPokedex={setPokemonsPokedex}
                    setAllPokemons={setAllPokemons}
                    pokemonsPokedex={pokemonsPokedex}
                    pokemonsCompare={pokemons}
                    toUpperCase={toUpperCase}
                    setIsOpen={setIsOpen}
                    catchPokemon={catchPokemon}
                    details={details}
                    deletePokemon={deletePokemon}
                    setIsOpenPokedex={setIsOpenPokedex}
                  />
                );
              })}
            </Card>
          </>
        )}
        {isOpen ? <Modal ></Modal> : <></>}
        {isOpenPokedex ? <ModalPokedex></ModalPokedex> : <></>}
      </Home>
    </>
  );
};
