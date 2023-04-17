
import { Home, H1, Card } from "./Home-Styled";
import { CardPokemon } from "./PokeCard/Card";

export const HomePage = (props) => {
  const { pokemons, loading , setPokemonsPokedex} = props;

  return (
    <>
      <Home>
        {loading ? (
          <div> carregando</div>
          ) : (<>
            <H1>Todos os pokemons</H1>
            <Card>
            {pokemons.map((Pokemon, index) => {
              return <CardPokemon key={index} index={index}  pokemons={Pokemon} setPokemonsPokedex={setPokemonsPokedex} 
              />
              
              ;
            })}
           
        </Card>
        </>)}
     </Home>
    </>
  );
};

