import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  height: 10rem;
  background-color: #fff;
  font-family: helvetica;
  
  `;
export const Img = styled.img`
  align-self: center;
  grid-column: 9/9;
 
  `;

export const Button = styled.button`
  display: flex;
  align-self: center;
  font-size: 1.5em;
  font-weight: bold;
  justify-content: center;
  width: 14rem;
  height: 4rem;
  background-color: #33a4f5;
  grid-column: 14/15;
`;

export const AllPokemons = styled.a`
display:flex;
align-self:center;
justify-self:center;
grid-column:2/6;
font-size:1.8vw;
text-decoration:underline;
font-weight:bolder;
color:black;
align-items:center;
`
