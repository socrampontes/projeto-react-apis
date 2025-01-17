import { PropagateLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
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
  Total,
  DivOrganizationMove,
} from "./Details-Styled";
import { GlobalContext } from "../../context/GlobalContext";

export const DetailsPage = () => {
  const context = useContext(GlobalContext);
  const { pokemons, loading, toUpperCase } = context;
  const [maxStat, setMaxStat] = useState([]); 

  const pathParams = useParams();
  const renderPokemon = () => {
    const pokemon = pokemons.filter(
      (pokemon) => pokemon.data.name === pathParams.pokemonName
    );
    const stats = (stats, position) => {
      stats.map((stat) => {
        if (stat.base_stat > maxStat) {
          setMaxStat(stat.base_stat);
        }
      });
      const percent = (stats[position].base_stat / maxStat) * 100;
      return percent;
    };

    return (
      <CardFormat type={pokemon[0].data.types[0].type.name}>
        <DivOrganization>
          <ImgSub src={pokemon[0].data.sprites.front_default} alt="" />
          <ImgSub src={pokemon[0].data.sprites.back_default} alt="" />
        </DivOrganization>
        <StatsOrganization>
          <H2>Base stats</H2>
          <hr />
          <span>
            HP<span> {pokemon[0].data.stats[0].base_stat}</span>
            <BarraStats>
              <Stats stats={stats(pokemon[0].data.stats, [0])} />
            </BarraStats>
          </span>
          <hr />
          <span>
            Attack <span> {pokemon[0].data.stats[1].base_stat}</span>
            <BarraStats>
              <Stats stats={stats(pokemon[0].data.stats, [1])} />
            </BarraStats>
          </span>
          <hr />
          <span>
            Defense <span>{pokemon[0].data.stats[2].base_stat}</span>
            <BarraStats>
              <Stats stats={stats(pokemon[0].data.stats, [2])} />
            </BarraStats>
          </span>
          <hr />
          <span>
            Sp. Atk <span> {pokemon[0].data.stats[3].base_stat}</span>
            <BarraStats>
              <Stats stats={stats(pokemon[0].data.stats, [3])} />
            </BarraStats>
          </span>
          <hr />
          <span>
            Sp. Def <span> {pokemon[0].data.stats[4].base_stat}</span>
            <BarraStats>
              <Stats stats={stats(pokemon[0].data.stats, [4])} />
            </BarraStats>
          </span>
          <hr />
          <span>
            Speed <span> {pokemon[0].data.stats[5].base_stat}</span>
            <BarraStats>
              <Stats stats={stats(pokemon[0].data.stats, [5])} />
            </BarraStats>
          </span>
          <hr />
          <Total>
            Total{" "}
            <span>
              {pokemon[0].data.stats[0].base_stat +
                pokemon[0].data.stats[1].base_stat +
                pokemon[0].data.stats[2].base_stat +
                pokemon[0].data.stats[3].base_stat +
                pokemon[0].data.stats[4].base_stat +
                pokemon[0].data.stats[5].base_stat}
            </span>
          </Total>
          <hr />
        </StatsOrganization>

        <DivOrganization>
          <DivOrganization>
            <h3>#{pokemon[0].data.id}</h3>
            <h1>{toUpperCase(pokemon[0].data.name)}</h1>
            <span>
              <Types>
                {pokemon[0].data.types.map((type, index) => {
                  return (
                    <Type key={index} type={type.type.name}>
                      <ImgTypes type={type.type.name} />
                      {toUpperCase(type.type.name)}
                    </Type>
                  );
                })}
              </Types>
            </span>
          </DivOrganization>
          <DivOrganizationMove>
            <H2>Moves:</H2>
            <Moves>
              {pokemon[0].data.moves.map((moves, index) => {
                return (
                  <Move key={index}>
                    <p>{toUpperCase(moves.move.name)}</p>
                  </Move>
                );
              })}
            </Moves>
          </DivOrganizationMove>
        </DivOrganization>

        <DivOrganization>
          <Img
            src={pokemon[0].data.sprites.other["official-artwork"].front_default}
            alt={pokemon[0].data.name}
          />
        </DivOrganization>
      </CardFormat>
    );
  };

  return (
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
  );
};
{
  /* <hr />
<span>
  HP<span> {stats(pokemon[0].stats , [0])}</span>
  <BarraStats>
    <Stats></Stats>
  </BarraStats>
</span>
<hr />
<span>
  HP<span> {stats(pokemon[0].stats , [1])}</span>
  <BarraStats>
    <Stats></Stats>
  </BarraStats>
</span>
<hr />
<span>
  HP<span> {stats(pokemon[0].stats , [2])}</span>
  <BarraStats>
    <Stats></Stats>
  </BarraStats>
</span>
<hr />
<span>
  HP<span> {stats(pokemon[0].stats , [3])}</span>
  <BarraStats>
    <Stats></Stats>
  </BarraStats>
</span>
<hr />
<span>
  HP<span> {stats(pokemon[0].stats , [4])}</span>
  <BarraStats>
    <Stats></Stats>
  </BarraStats>
</span>
<hr />
<span>
  HP<span> {stats(pokemon[0].stats , [5])}</span>
  <BarraStats>
    <Stats></Stats>
  </BarraStats>
</span>
<hr /> */
}
