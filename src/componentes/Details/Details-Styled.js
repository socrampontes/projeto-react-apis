import styled from "styled-components";

export const Details = styled.div`
width:100vw;
  background-color: #5d5d5d;
  height: 120vh;
  background-image: url(/img/pngwing1.png);
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const CardFormat = styled.div`
  background-color: ${(props) => {
    switch (props.type) {
      case "grass":
        return "#729F92";
      case "fire":
        return "#EAAB7D";
      case "water":
        return "#71C3FF";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#DA70D6";
      case "electric":
        return "#DAA520";
      case "normal":
        return "#F0E68C";
      case "dragon":
        return "#004170";
      case "rock":
        return "#DEB887";
      case "ghost":
        return "#7B68EE";
      case "psychic":
        return "#F08080";
      case "ground":
        return "#A0522D";
      case "ice":
        return "#48D1CC";
      case "fighting":
        return "#DB7093";
      case "fairy":
        return "#DB7093";
      default:
        return "red";
    }
  }};
  border-radius: 2vw;
  background-image: url(/img/pngwing.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 50%;
  margin: 3%;
  display: flex;
  position: relative;
  gap: 3%;
  padding: 1vw;
  width: 94%;
`;

export const TittleDetalais = styled.h1`
  font-size: 3vw;
  margin: 0 0 4% 2%;
  padding-top: 4%;
`;

export const Img = styled.img`
  display: flex;
  width: 110%;
  transform: translate(-12%, -53%);
`;
export const ImgSub = styled.img`
  width: 100%;
  display: flex;
  align-self: center;
  border-radius: 0.8vw;
  background-color: #ffffff;
  border: 1px black solid;
  margin: 4%;
`;
export const DivOrganization = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left: 2%;
  h4 {
    margin: 8% 0 -10% 0;
  }
  h1 {
    font-size: 3vw;
  }
`;
export const StatsOrganization = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  background-color: #ffffff;
  border-radius: 0.8vw;
  padding: 2%;
  margin: 1% 1% 1% 1%;
  hr {
    color: #f0f0f0;
    opacity: 12%;
  }

  span {
    margin-top: 1%;
    color: #737373;

    font-size: 1vw;
    display: flex;
    justify-content: end;
    span {
      margin: 0 2% 0 6%;
      color: black;
    }
  }
`;
export const BarraStats = styled.div`
  height: 1.5vh;
  border-radius: 10px;
  width: 52%;
  height: 45%;
  margin: 1.5% 10% 0 5%;
`;
export const Stats = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) => {
    if (props.stats >= 83) {
      return "#FFDE6A";
    } else if (props.stats < 84 ) {
      return "#FF7C2D";
    }
  }};
  width: ${(props) => props.stats}%;
`;

export const Move = styled.div`
  margin: 2% 0 8% 0;
  p {
    display: inline;
    text-align: center;
    background: #ececec;
    border: 1.7px dashed #ffffff;
    border-radius: 12px;
    padding: 3% 5% 3% 5%;
    color: #000000;
    font-size: 1vw;
  }
`;
export const H2 = styled.h2`
  color: black;
  font-size: 1.8vw;
  margin-bottom: 5%;
`;
export const Moves = styled.div`
  background-color: #ffffff;
  height: 100%;
  margin: 15% 0 5% 0;
  border-radius: 0.8vw;
  padding: 5%;
`;
export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

export const Type = styled.div`
  margin: 20% 0 0 0;
  display: flex;
  text-align: center;
  background-color: ${(props) => {
    switch (props.type) {
      case "grass":
        return "#70B873;";
      case "fire":
        return "#F44900;";
      case "water":
        return "#33A4F5;";
      case "bug":
        return "#316520;";
      case "normal":
        return "#8A8A8A;";
      case "dragon":
        return "#0A6CBF;";
      case "electric":
        return "#F4D23B;";
      case "poison":
        return "#AD61AE;";
      case "ground":
        return "#D97745;";
      case "fairy":
        return "#EC8FE6;";
      case "fighting":
        return "#CE4069;";
      case "psychic":
        return "#F67176;";
      case "rock":
        return "#C7B78B;";
      case "ghost":
        return "#5269AC;";
      case "ice":
        return "#74CEC0;";
      case "dark":
        return "#5C5365;";
      case "flying":
        return "#6892B0;";
      case "steel":
        return "#BBBBBB;";

      default:
        break;
    }
  }};
  border: 0.1px dashed #ffffff;
  border-radius: 8px;
  padding: 6% 12% 6% 3%;
`;

export const Types = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 3%;
`;
export const ImgTypes = styled.div`
  background-image: ${(props) => {
    switch (props.type) {
      case "grass":
        return "url('./img/grass.png');";
      case "fire":
        return "url('/img/fire.png');";
      case "water":
        return "url('/img/water.png');";
      case "bug":
        return "url('/img/bug.png');";
      case "normal":
        return "url('/img/normal.png');";
      case "dragon":
        return "url('/img/dragon.png');";
      case "electric":
        return "url('/img/electric.png');";
      case "poison":
        return "url('/img/poison.png');";
      case "ground":
        return "url('/img/ground.png');";
      case "fairy":
        return "url('/img/fairy.png');";
      case "fighting":
        return "url('/img/fighting.png');";
      case "psychic":
        return "url('/img/psychic.png');";
      case "rock":
        return "url('/img/rock.png');";
      case "ghost":
        return "url('/img/ghost.png');";
      case "ice":
        return "url('/img/ice.png');";
      case "dark":
        return "url('/img/dark.png');";
      case "flying":
        return "url('/img/flying.png');";
      case "steel":
        return "url('/img/steel.png');";
      default:
        break;
    }
  }};

  background-repeat: no-repeat;
  background-position: center;
  width: 2rem;
  margin-right: 10%;
`;
export const Total = styled.div`
  color: #737373;
  display: flex;
  transform: translate(10.7%, 10%);
  font-size: 1vw;
  margin-right: 7%;

  span {
    font-size: 1vw;
    display: flex;
    transform: translate(10.7%, -14%);
    color: black;
    font-weight: bolder;
    margin: 1% 0 0 5%;
  }
`;
