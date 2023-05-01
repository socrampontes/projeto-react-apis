import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  width: 100%;
  height: 10rem;
  background-color: #fff;
  font-family: helvetica;
  grid-template-columns: repeat(9, 1fr);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items:center;
  width: 17vw;
  height: 4vw;
  font-size: 1.4vw;
  font-weight: bold;
  font-family: "Poppins" sans-serif;
  background-color: #33a4f5;
  grid-column: 8/9;
  margin-left: 20%;
`;
export const ButtonExcluir = styled.button`
  display: flex;
  align-items:center;
  justify-content: center;
  align-self: center;
  width: 17vw;
  height: 4vw;
  font-size: 1.4vw;
  font-weight: bold;
  font-family: "Poppins" sans-serif;
  background-color: #FF6262;
  grid-column: 8/9;
  margin-left: 20%;
`;

export const AllPokemons = styled.a`
  display: flex;
  align-self: center;

  font-size: 1.7vw;
  text-decoration: underline;
  font-weight: bolder;
  color: black;
  align-items: center;
  grid-column: 1/3;
  margin-left: 20%;
`;

export const Img = styled.img`
  justify-self: center;
  align-self: center;
  grid-column: 5/6;
  position: absolute;
  margin-right:2%;
`;
