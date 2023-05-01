import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/cordinations";
import {
  Header,
  Img,
  Button,
  AllPokemons,
  ButtonExcluir,
} from "./Header-Styled";
import { useContext } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { GlobalContext } from "../../context/GlobalContext";
import { ModalPokedex } from "../../Pages/Modal/modalPokedex";
import { Modal } from "../../Pages/Modal/modal";

export const HeaderPage = () => {
  const context = useContext(GlobalContext);
  const {
    pokemonsDetails,
    addOrDeletePokemon,
    catchPokemon,
    deletePokemon,
    setIsOpen,
    setIsOpenPokedex,
    isOpenPokedex,
    isOpen,
  } = context;

  const navigate = useNavigate();

  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Header>
            <Img src="/img/image.svg" alt="" />
            <Button
              onClick={() => {
                goToPokedex(navigate);
              }}
            >
              Pokédex
            </Button>
          </Header>
        );
      case "/pokedex":
        return (
          <Header>
            <AllPokemons href="/">
              {" "}
              <IoChevronBackSharp /> Todos Pokémons
            </AllPokemons>

            <Img src="./img/image.svg" alt="" />
          </Header>
        );
      case `/details/${pokemonsDetails}`:
        return (
          <Header>
            { <AllPokemons href="/">
              {" "}
              <IoChevronBackSharp /> Todos Pokémons
            </AllPokemons> }

            <Img src="/img/image.svg" alt="" />

            {addOrDeletePokemon() ? (
              <ButtonExcluir
                onClick={() => {
                  deletePokemon(pokemonsDetails), setIsOpenPokedex(true);
                }}
              >
                Excluir da Pokedex
              </ButtonExcluir>
            ) : (
              <Button
                onClick={() => {
                  catchPokemon(pokemonsDetails), setIsOpen(true);
                }}
              >
                Capturar!
              </Button>
            )}
          </Header>
        );
    }
  };

  return (
    <>
    
      {isOpenPokedex ? <ModalPokedex></ModalPokedex> : <></>}
      {isOpen ? <Modal></Modal> : <></>}
      {renderHeader()}
    
    </>
  );
};
