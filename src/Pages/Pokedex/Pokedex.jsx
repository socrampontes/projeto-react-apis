import { PropagateLoader } from "react-spinners";
import { Home, H1, Card, Loading } from "./Pokedex-Styled";
import { CardPokedex } from "../../componentes/CardPokedex/CardPokedex";
import { useContext, useEffect } from "react";
import { ModalPokedex } from "../../Pages/Modal/modalPokedex";
import { GlobalContext } from "../../context/GlobalContext";

export const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const {
    pokemonsPokedex,
    loading,
    setPokemonsPokedex,
    setAllPokemons,
    setVisible,
    toUpperCase,
    isOpenPokedex,
    setIsOpenPokedex,
    details,
    deletePokemon,
  } = context;

  useEffect(() => {
    setAllPokemons(false);
    setVisible(false);
  }, [pokemonsPokedex]);

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
            <Card key={pokemonsPokedex.id}>
              {pokemonsPokedex.map((Pokemon, index) => {
                return (
                  <CardPokedex
                  
                    key={index}
                    capturedPokemon={Pokemon}
                    setPokemonsPokedex={setPokemonsPokedex}
                    toUpperCase={toUpperCase}
                    setIsOpenPokedex={setIsOpenPokedex}
                    pokemonsPokedex={pokemonsPokedex}
                    details={details}
                    deletePokemon={deletePokemon}
                  />
                );
              })}
            </Card>
          </>
        )}
        {isOpenPokedex ? <ModalPokedex></ModalPokedex> : <></>}
      </Home>
    </>
  );
};
