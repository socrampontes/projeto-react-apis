import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { goToDetails } from "../../Routes/cordinations";

export const CardPokemon = (props) => {
  const {
    pokemons,
    setAllPokemons,
    pokemonsPokedex,
    toUpperCase,
    setIsOpen,
    details,
    catchPokemon,
    deletePokemon,
    setIsOpenPokedex,
  } = props;

  const navigate = useNavigate(pokemons);

  const [button, setButton] = useState(true);

  useEffect(() => {
    const naPokedex = pokemonsPokedex.map((pokemon) => pokemon.name);
    if (naPokedex.includes(pokemons.name)) {
      setButton(false);
    }
    setAllPokemons(true);
  }, [pokemonsPokedex]);



  return (
    <>
    
      <CardFormat
        key={pokemons.id}
        type={pokemons.types.map((type) => type.type.name)}
      >
        <Div>
          <div>
            <p>#{pokemons.id.toString().padStart(2, '0')}</p>
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
              goToDetails(navigate, pokemons.name), details(pokemons.name);
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
                catchPokemon(pokemons.name), setIsOpen(true);
              }}
            >
              {" "}
              Capturar!
            </Button>
          ) : (
            <InPokedex onClick={() => {deletePokemon(pokemons.name) , setButton(true) , setIsOpenPokedex(true)}}>
              Excluir
            </InPokedex>
          )}
        </ImgBnt>
      </CardFormat>
    </>
  );
};
