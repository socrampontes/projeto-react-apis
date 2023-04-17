import {
  Details,
  CardFormat,
  TittleDetalais,
  BarraStats,
  Stats,
  Img,
  ImgSub,
  DivOrganization,
  StatsOrganization,
  Move,
  H2,
  Moves,
  Type,
} from "./Details-Styled";
import { useParams } from "react-router-dom";

export const DetailsPage = (props) => {
  const { pokemons, loading } = props;

  const pathParams = useParams();
  const renderPokemon = () => {
    const pokemon = pokemons.filter(
      (pokemon) => pokemon.name === pathParams.pokemonName
      );
      
      
        
    return (
      <>
        <CardFormat type={pokemon[0].types[0].type.name}>
          <DivOrganization>
            <ImgSub src={pokemon[0].sprites.front_default} alt="" />
            <ImgSub src={pokemon[0].sprites.back_default} alt="" />
          </DivOrganization>
          <StatsOrganization>
            <H2>Base stats</H2>
            
            <span>
              HP<span> {pokemon[0].stats[0].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <span>
              Attack <span> {pokemon[0].stats[1].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <span>
              Defense <span>{pokemon[0].stats[2].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <span>
              Sp. Atk <span> {pokemon[0].stats[3].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <span>
              Sp. Def <span> {pokemon[0].stats[4].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <span>
              Speed <span> {pokemon[0].stats[5].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
          
          </StatsOrganization>

          <DivOrganization>
            <DivOrganization>
              <h4>#{pokemon[0].id}</h4>
              <h1>{pokemon[0].name}</h1>

              <Type >
                {pokemon[0].types.map((type) => {
                  switch (type.type.name) {
                    case "grass":
                      return <img src="/img/Grass.png" alt="" />;
                    case "fire":
                      return <img src="/img/Fire.png" alt="" />;
                    case "water":
                      return <img src="/img/Water.png" alt="" />;
                    case "bug":
                      return <img src="/img/Bug.png" alt="" />;
                    case "normal":
                      return <img src="/img/Normal.png" alt="" />;
                    case "poison":
                      return <img src="/img/Poison.png" alt="" />;
                    case "flying":
                      return <img src="/img/Flying.png" alt="" />;
                    case "dark":
                      return <img src="/img/Dark.png" alt="" />;
                    case "dragon":
                      return <img src="/img/Dragon.png" alt="" />;
                    case "electric":
                      return <img src="/img/Eletric.png" alt="" />;
                    case "fairy":
                      return <img src="/img/Fairy.png" alt="" />;
                    case "fighting":
                      return <img src="/img/Fighting.png" alt="" />;
                    case "ghost":
                      return <img src="/img/Ghost.png" alt="" />;
                    case "ground":
                      return <img src="/img/Ground.png" alt="" />;
                    case "ice":
                      return <img src="/img/Ice.png" alt="" />;
                    case "psychic":
                      return <img src="/img/Psychic.png" alt="" />;
                    case "steel":
                      return <img src="/img/Steel.png" alt="" />;
                    case "rock":
                      return <img src="/img/Rock.png" alt="" />;
                    default:
                      return "red";
                      }
                })}
              </Type>
            </DivOrganization>
            <Moves>
              <H2>Moves:</H2>
              <Move><span>{pokemon[0].moves[0].move.name}</span></Move>
              <Move><span>{pokemon[0].moves[1].move.name}</span></Move>
              <Move><span>{pokemon[0].moves[2].move.name}</span></Move>
              <Move><span>{pokemon[0].moves[3].move.name}</span></Move>
             
            </Moves>
          </DivOrganization>

          <DivOrganization>
            <Img
              src={pokemon[0].sprites.other["official-artwork"].front_default}
              alt={pokemon[0].name}
            />
          </DivOrganization>
        </CardFormat>
      </>
    );
  };

  return (
    <>
      
        <Details>
          <TittleDetalais>Detalhes</TittleDetalais>
          <div>{loading ? <div>carregando...</div> : renderPokemon()}</div>
        </Details>
      
    </>
  );
};
