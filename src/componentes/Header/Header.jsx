import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/cordinations";
import { Header, Img, Button } from "./Header-Styled";
import { useState } from "react";

export const HeaderPage = () => {
  const [nav, setNav] = useState(1);
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Img src="./img/image 1.png" alt="" />
        <Button
          onClick={() => {
            goToPokedex(navigate);
          }}
        >
          Pokédex
        </Button>
      </Header>
    </>
  );
};
