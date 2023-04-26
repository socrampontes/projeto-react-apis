import React from "react";
import { Modall, ModalContent, Exit } from "./styed-Modal";

export const Modal = (props) => {
  const { isOpen, setIsOpen, id } = props;
  const handleOutSideClick = (e) => {
    if (e.targe == id) {
      setIsOpen(false);
    }
  };

  return (
    <Modall id={id} onClick={handleOutSideClick}>
       <ModalContent>
        <div>
          
          <h1>Oh, no!</h1>
          <p>O Pokémon foi removido da sua Pokedéx</p>
        </div>
      </ModalContent>
    </Modall>
  );
};
