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
  grid-column: 8/10;
 
  `;

export const Button = styled.button`
  display: flex;
  align-self: center;
  font-size: 1.5em;
  font-weight: bold;
  justify-content: center;
  font-family: 'Poppins' sans-serif;
  width: 17rem;
  height: 4rem;
  background-color: #33a4f5;
  
  grid-column: 15/16;
`;

export const AllPokemons = styled.a`
display:flex;
align-self:center;
justify-self:center;
grid-column:1/6;
font-size:1.8vw;
text-decoration:underline;
font-weight:bolder;
color:black;
align-items:center;
`
export const Div = styled.div`
width: 17rem;
  height: 4rem;
grid-column: 15/16;
`
