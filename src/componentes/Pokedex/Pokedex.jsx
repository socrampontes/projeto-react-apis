import { Pokedex } from "./Pokedex-Styled";

export const PokedexPage = (props) => {
  const {pokemonsPokedex, setPokemonsPokedex} = props
  console.log(pokemonsPokedex)
  return (
    <>
      <Pokedex>
      {pokemonsPokedex}
      </Pokedex>
    </>
  );
};

