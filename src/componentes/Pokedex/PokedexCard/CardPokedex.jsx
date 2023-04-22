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
import { goToDetails } from "../../../Routes/cordinations";

export const CardPokedex = (props) => {
  const {
    pokemons,
    setPokemonsPokedex,
    setAllPokemons,
    allPokemons,
    todosPokemons,
    toUpperCase
  } = props;
  const navigate = useNavigate(pokemons);

  const deletePokemon = (pokemonToDelete) => {
    const updatedPokedex = todosPokemons.filter(
      (pokemon) => pokemon.id !== pokemonToDelete.id
    );
    setPokemonsPokedex(updatedPokedex);
    localStorage.setItem("pokemons", JSON.stringify(updatedPokedex));
  };
 

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

          <Button
            onClick={() => {
              deletePokemon(pokemons);
            }}
          >
            {" "}
            Excluir!
          </Button>
        </ImgBnt>
      </CardFormat>
    </>
  );
};
