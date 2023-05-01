import styled from "styled-components";

export const CardFormat = styled.div`
  display: flex;
  width: 26em;
  height: 12em;
  margin-bottom: 3.5rem;
  border-radius: 15px;
  background-color: ${(props) => {
    switch (props.type[0]) {
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
      case "steel":
        return "#BBBBBB;";
      case "dark":
        return "#5C5365;";
      default:
        return "red";
    }
  }};
  color: #ffffff;
`;

export const Img = styled.img`
  position: absolute;
  transform: translate(-40%, -34%);
  width: 11em;
  opacity: 100%;
  z-index: 5;
`;

export const ImgBnt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ImgPokeBoll = styled.img`
  position: absolute;
  transform: translate(-49.5%, -0.8%);
  width: 14.1rem;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 17rem;
  margin-left: 2rem;
  gap: 3.5rem;
  a {
    transform: translate(-0%, -70%);
    color: #ffffff;
    text-decoration: underline;
    :active {
      color: blue;
    }
    :hover {
      color: lightgray;
      cursor: pointer;
    }
  }
  p {
    font-size: 1.2rem;
    transform: translate(-1%, 50%);
    
    
  }
  h1 {
    margin-top: -1%;
    transform: translate(-1%, 10%);
   
    
    
  }
`;
export const Button = styled.button`
  position: absolute;
  transform: translate(-30%, 155%);
  width: 8rem;
  background-color: #ffffff;
  color: black;
`;

export const InPokedex = styled.button`
  position: absolute;
  transform: translate(-30%, 155%);
  width: 8rem;
  background-color: #ff6262;
  color: black;
`;

export const Type = styled.div`
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
  padding: 0.6% 3% 1.3% 0%;
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
  margin-right: 0.3rem;
`;
