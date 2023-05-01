import React, { useContext } from "react";
import { Modall, ModalContent, Exit } from "./styed-Modal";
import { GlobalContext } from "../../context/GlobalContext";

export const Modal = () => {
  const context = useContext(GlobalContext)
  
  const { setIsOpen} = context;
  const handleOutSideClick = (e , id ) => {
    if (e.targe == id) {
      setIsOpen(false);
    }
  };

  return (
    <Modall id={"id"} onClick={handleOutSideClick}>
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
