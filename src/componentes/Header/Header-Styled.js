import styled from "styled-components";

export const Header = styled.header`
width:100%;
  display: flex;
  justify-content:space-between;
  padding:0 10%;
  height: 10rem;
  background-color: #fff;
  font-family: helvetica;
  background-position:center;
  `;

export const Button = styled.button`
  display: flex;
  align-self: center;
  align-items:center;
  justify-content:center;
  width: 17rem;
  height: 4rem;
  font-size: 160%;
  font-weight: bold;
  font-family: 'Poppins' sans-serif;
  background-color: #33a4f5;
  grid-column: 6/8;
`;

export const AllPokemons = styled.a`
display:flex;
align-self:center;
justify-self:center;
font-size:1.8vw;
text-decoration:underline;
font-weight:bolder;
color:black;
align-items:center;
`
export const ButtonExcluir = styled.button`
  display: flex;
  align-self: center;
  align-items:center;
  justify-content:center;
  font-size: 140%;
  font-weight: bold;
  justify-content: center;
  font-family: 'Poppins' sans-serif;
  width: 14%;
  height: 4rem;
  background-color: #FF6262;
  grid-column: 6/8;
`;
 export const Img =styled.img`
padding:1% 5%;
 `