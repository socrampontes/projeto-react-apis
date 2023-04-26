import { PropagateLoader } from "react-spinners";
import { Home, H1, Card, Loading } from "./Pokedex-Styled";
import { CardPokedex } from "./PokedexCard/CardPokedex";
import { useEffect } from "react";
import { Modal } from "../Modal/modalPokedex";
import { AllPokemons } from "../Header/Header-Styled";

export const PokedexPage = (props) => {
  const {
    pokemons,
    loading,
    setPokemonsPokedex,
    setAllPokemons,
    todosPokemons,
    setVisible,
    toUpperCase,
    isOpenPokedex,
    setIsOpenPokedex,
  } = props;
  useEffect(() => {
    setAllPokemons(false);
    setVisible(false);
  }, [AllPokemons]);
  return (
    <>
      <Home>
        {loading ? (
          <Loading>
            <PropagateLoader color="#36d7b7" size={35} />
          </Loading>
        ) : (
          <>
            <H1>Meus pokemons</H1>
            <Card key={pokemons.id}>
              {pokemons.map((Pokemon, index) => {
                return (
                  <CardPokedex
                    key={index}
                    index={index}
                    pokemons={Pokemon}
                    setPokemonsPokedex={setPokemonsPokedex}
                    setAllPokemons={setAllPokemons}
                    todosPokemons={pokemons}
                    toUpperCase={toUpperCase}
                    isOpenPokedex={isOpenPokedex}
                    setIsOpenPokedex={setIsOpenPokedex}
                  />
                );
              })}
            </Card>
          </>
        )}
        {isOpenPokedex ? <Modal isOpen={isOpenPokedex} setIsOpen={setIsOpenPokedex} ></Modal> : <></>}
      </Home>
    </>
  );
};
