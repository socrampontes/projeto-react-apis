import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Routes/cordinations";
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
} from "./Styled-Card";

export const CardPokedex = (props) => {
  const {
    capturedPokemon,
    setPokemonsPokedex,
    pokemonsPokedex,
    toUpperCase,
    setIsOpenPokedex,
    details,
    deletePokemon
  } = props;
  const navigate = useNavigate(capturedPokemon);

  

 

  return (
    <>
      <CardFormat
        key={capturedPokemon.id}
        type={capturedPokemon.types.map((type) => type.type.name)}
      >
        <Div>
          <div>
            <p>#{capturedPokemon.id}</p>
            <h1>{toUpperCase(capturedPokemon.name)} </h1>
            <Types>
              {capturedPokemon.types.map((type, index) => {
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
              goToDetails(navigate, capturedPokemon.name),
                details(capturedPokemon.name);
            }}
          >
            Detalhes
          </a>
        </Div>
        <ImgBnt>
          <Img
            key={capturedPokemon.url}
            src={
              capturedPokemon.sprites.other["official-artwork"].front_default
            }
            alt={capturedPokemon.name}
          />
          <ImgPokeBoll src="./img/wing.png" />

          <Button
            onClick={() => {
              deletePokemon(capturedPokemon.name), setIsOpenPokedex(true);
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
