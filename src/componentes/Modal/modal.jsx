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
          {/* <Exit onClick={() => setIsOpen(false)}>X</Exit> */}
          <h1>Gotcha!</h1>
          <p>O Pokémon foi adicionado a sua Pokédex</p>
        </div>
      </ModalContent>
    </Modall>
  );
};
