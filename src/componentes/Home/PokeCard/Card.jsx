import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import {
  CardFormat,
  Img,
  ImgBnt,
  Div,
  Type,
  ImgPokeBoll,
  Button,
} from "./Styled-Card";
import { goToDetails } from "../../../Routes/cordinations";

export const CardPokemon = (props) => {
  const { index , pokemons , setPokemonsPokedex } = props;
  const navigate = useNavigate(pokemons);
  const handlePokemon = (pokemons) =>{
    setPokemonsPokedex(pokemons)
  }
  console.log()
  return (
    <>
      <CardFormat  type={pokemons.types.map((type) => type.type.name)}>
        <Div >
          <div>
            <p >#{pokemons.id}</p>
            <h2 >{pokemons.name} </h2>
            <Type type={pokemons.types.map((type) => type.type.name)}>
               {pokemons.types.map((type, index) => {
                switch (type.type.name) {
                  case "grass":
                    return <img src="./img/Grass.png" alt="" />;
                  case "fire":
                    return <img src="./img/Fire.png" alt="" />;
                  case "water":
                    return <img src="./img/Water.png" alt="" />;
                  case "bug":
                    return <img src="./img/Bug.png" alt="" />;
                  case "normal":
                    return <img src="./img/Normal.png" alt="" />;
                  case "poison":
                    return <img src="./img/Poison.png" alt="" />;
                  case "flying":
                    return <img src="./img/Flying.png" alt="" />;
                  case "dark":
                    return <img src="./img/Dark.png" alt="" />;
                  case "dragon":
                    return <img src="./img/Dragon.png" alt="" />;
                  case "electric":
                    return <img src="./img/Eletric.png" alt="" />;
                  case "fairy":
                    return <img src="./img/Fairy.png" alt="" />;
                  case "fighting":
                    return <img src="./img/Fighting.png" alt="" />;
                  case "ghost":
                    return <img src="./img/Ghost.png" alt="" />;
                  case "ground":
                    return <img src="./img/Ground.png" alt="" />;
                  case "ice":
                    return <img src="./img/Ice.png" alt="" />;
                  case "psychic":
                    return <img src="./img/Psychic.png" alt="" />;
                  case "steel":
                    return <img src="./img/Steel.png" alt="" />;
                  case "rock":
                    return <img src="./img/Rock.png" alt="" />;
                  default:
                    return "red";
                }
              })} 
            </Type>
          </div>
          <a onClick={()=>{goToDetails(navigate , pokemons.name)}}>Detalhes</a>
        </Div>
        <ImgBnt>
          <Img key={pokemons.url}
            src={pokemons.sprites.other["official-artwork"].front_default}
            alt={pokemons.name}
          />
          <ImgPokeBoll src="./img/wing.png" />
          <Button onClick={()=>{handlePokemon(pokemons.name)}}>Capturar!</Button>
          
        </ImgBnt>
      </CardFormat>
    </>
  );
};


{/* {pokemons.types.map((type, index) => {
                switch (type.type.name) {
                  case "grass":
                    return <img src="./img/Grass.png" alt="" />;
                  case "fire":
                    return <img src="./img/Fire.png" alt="" />;
                  case "water":
                    return <img src="./img/Water.png" alt="" />;
                  case "bug":
                    return <img src="./img/Bug.png" alt="" />;
                  case "normal":
                    return <img src="./img/Normal.png" alt="" />;
                  case "poison":
                    return <img src="./img/Poison.png" alt="" />;
                  case "flying":
                    return <img src="./img/Flying.png" alt="" />;
                  case "dark":
                    return <img src="./img/Dark.png" alt="" />;
                  case "dragon":
                    return <img src="./img/Dragon.png" alt="" />;
                  case "electric":
                    return <img src="./img/Eletric.png" alt="" />;
                  case "fairy":
                    return <img src="./img/Fairy.png" alt="" />;
                  case "fighting":
                    return <img src="./img/Fighting.png" alt="" />;
                  case "ghost":
                    return <img src="./img/Ghost.png" alt="" />;
                  case "ground":
                    return <img src="./img/Ground.png" alt="" />;
                  case "ice":
                    return <img src="./img/Ice.png" alt="" />;
                  case "psychic":
                    return <img src="./img/Psychic.png" alt="" />;
                  case "steel":
                    return <img src="./img/Steel.png" alt="" />;
                  case "rock":
                    return <img src="./img/Rock.png" alt="" />;
                  default:
                    return "red";
                }
              })} */}