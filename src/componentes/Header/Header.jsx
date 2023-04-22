import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/cordinations";
import { Header, Img, Button, AllPokemons} from "./Header-Styled";
import { useState } from "react";
import {IoChevronBackSharp} from "react-icons/io5"

export const HeaderPage = (props) => {
  const { allPokemons , visible  } = props;
  
  const navigate = useNavigate();

  return (
    <>
      <Header>
        {allPokemons ? <div> </div> : <AllPokemons href="/"> <IoChevronBackSharp/> Todos Pokémons</AllPokemons>}

        <Img src="./img/image.png" alt="" />
        {visible? <Button
          onClick={() => {
            goToPokedex(navigate);
          }}
        >
          Pokédex
        </Button> : <div></div>}
      </Header>
    </>
  );
};
