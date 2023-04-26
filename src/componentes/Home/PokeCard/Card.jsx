import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../Modal/modal";

import {
  CardFormat,
  Img,
  ImgBnt,
  Div,
  Type,
  ImgPokeBoll,
  Button,
  Types,
  ImgTypes,
  InPokedex,
} from "./Styled-Card";
import { goToDetails } from "../../../Routes/cordinations";

export const CardPokemon = (props) => {
  const {
    index,
    pokemons,
    setPokemonsPokedex,
    setAllPokemons,
    pokemonsPokedex,
    toUpperCase,
    isOpen,
    setIsOpen,
  } = props;
  const navigate = useNavigate(pokemons);
  const [button, setButton] = useState(true);

  const handlePokemon = (pokemonss) => {
    const pokedex = [...pokemonsPokedex, pokemonss];
    setPokemonsPokedex(pokedex);
    localStorage.setItem("pokemons", JSON.stringify(pokedex));
    setButton(false);
  };

  useEffect(() => {
    const compara2 = pokemonsPokedex.map((pokemon) => pokemon.name);

    if (compara2.includes(pokemons.name)) {
      setButton(false);
    }
    setAllPokemons(true);
  }, []);

  return (
    <>
      <CardFormat
        key={pokemons.id}
        type={pokemons.types.map((type) => type.type.name)}
      >
        <Div>
          <div>
            <p>#{pokemons.id}</p>
            <h1>{toUpperCase(pokemons.name)} </h1>
            <Types>
              {pokemons.types.map((type, index) => {
                return (
                  <Type key={index} type={type.type.name}>
                    <ImgTypes type={type.type.name} />
                    {toUpperCase(type.type.name)}
                  </Type>
                );
              })}
            </Types>
          </div>
          <a
            onClick={() => {
              goToDetails(navigate, pokemons.name);
            }}
          >
            Detalhes
          </a>
        </Div>
        <ImgBnt>
          <Img
            key={pokemons.url}
            src={pokemons.sprites.other["official-artwork"].front_default}
            alt={pokemons.name}
          />
          <ImgPokeBoll src="./img/wing.png" />
          {button ? (
            <Button
              onClick={() => {
                handlePokemon(pokemons), setIsOpen(true);
              }}
            >
              {" "}
              Capturar!
            </Button>
          ) : (
            <InPokedex>Na pokedex</InPokedex>
          )}
        </ImgBnt>
      </CardFormat>
      
    </>
  );
};
