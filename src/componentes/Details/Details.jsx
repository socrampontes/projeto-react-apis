import { PropagateLoader } from "react-spinners";
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
  Loading,
  ImgTypes,
  Types,
  Total
} from "./Details-Styled";
import { useParams } from "react-router-dom";

export const DetailsPage = (props) => {
  const { pokemons, loading, setAllPokemons , toUpperCase} = props;

  const pathParams = useParams();
  const renderPokemon = () => {
    const pokemon = pokemons.filter(
      (pokemon) => pokemon.name === pathParams.pokemonName
    );
    setAllPokemons(false);
    console.log(
      pokemon.map((type)=>type)
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
            <hr />
            <span>
              HP<span> {pokemon[0].stats[0].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <hr />
            <span>
              Attack <span> {pokemon[0].stats[1].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <hr />
            <span>
              Defense <span>{pokemon[0].stats[2].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <hr />
            <span>
              Sp. Atk <span> {pokemon[0].stats[3].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <hr />
            <span>
              Sp. Def <span> {pokemon[0].stats[4].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <hr />
            <span>
              Speed <span> {pokemon[0].stats[5].base_stat}</span>
              <BarraStats>
                <Stats></Stats>
              </BarraStats>
            </span>
            <hr />
            <Total>
              Total <span>
              {pokemon[0].stats[0].base_stat +
                pokemon[0].stats[1].base_stat +
                pokemon[0].stats[2].base_stat +
                pokemon[0].stats[3].base_stat +
                pokemon[0].stats[4].base_stat +
                pokemon[0].stats[5].base_stat}
                </span>
            </Total>
            <hr />
          </StatsOrganization>

          <DivOrganization>
            <DivOrganization>
              <h3>#{pokemon[0].id}</h3>
              <h1>{toUpperCase(pokemon[0].name)}</h1>

              <Types>
              {pokemon[0].types.map((type, index) => {
                return (
                  <Type key={index} type={type.type.name}>
                    <ImgTypes type={type.type.name} />
                    {toUpperCase(type.type.name)}
                  </Type>
                );
              })}
            </Types>
            </DivOrganization>
            <Moves>
              <H2>Moves:</H2>
              <Move>
                <span>{toUpperCase(pokemon[0].moves[0].move.name)}</span>
              </Move>
              <Move>
                <span>{toUpperCase(pokemon[0].moves[1].move.name)}</span>
              </Move>
              <Move>
                <span>{toUpperCase(pokemon[0].moves[2].move.name)}</span>
              </Move>
              <Move>
                <span>{toUpperCase(pokemon[0].moves[4].move.name)}</span>
              </Move>
              
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
        {loading ? (
          <Loading>
            <PropagateLoader color="#36d7b7" size={35} />
          </Loading>
        ) : (
          renderPokemon()
        )}
      </Details>
    </>
  );
};
