import React, { useContext } from "react";
import { Modall, ModalContent, Exit } from "./styed-Modal";
import { GlobalContext } from "../../context/GlobalContext";

export const ModalPokedex = (props) => {
  const context = useContext(GlobalContext)
  
  const { setIsOpenPokedex} = context;
  const handleOutSideClick = (e , id ) => {
    if (e.targe == id) {
      setIsOpenPokedex(false);
    }
  };

  return (
    <Modall id={"id"} onClick={handleOutSideClick}>
       <ModalContent>
        <div>
          
          <h1>Oh, no!</h1>
          <p>O Pokémon foi removido da sua Pokedéx</p>
        </div>
      </ModalContent>
    </Modall>
  );
};
