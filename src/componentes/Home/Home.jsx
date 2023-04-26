import { PropagateLoader } from "react-spinners";
import { Home, H1, Card, Loading } from "./Home-Styled";
import { CardPokemon } from "./PokeCard/Card";
import { Modal } from "../Modal/modal";
import { useEffect, useState } from "react";

export const HomePage = (props) => {
  const {
    pokemons,
    loading,
    setPokemonsPokedex,
    setAllPokemons,
    pokemonsPokedex,
    button,
    setButton,
    toUpperCase,
    isOpen,
    setIsOpen,
    setVisible,
  } = props;
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
                    button={button}
                    setButton={setButton}
                    pokemonsCompare={pokemons}
                    toUpperCase={toUpperCase}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
                );
              })}
            </Card>
          </>
        )}
        {isOpen ? <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal> : <></>}
      </Home>
    </>
  );
};
