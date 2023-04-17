import styled from "styled-components";

export const CardFormat = styled.div`
  display: flex;
  width: 26em;
  height: 12em;
  margin-bottom: 3rem;
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
      default:
        return "red";
    }
  }};
`;

export const Img = styled.img`
  position: absolute;
  transform: translate(-37%, -35.8%);
  width: 10.3rem;
  opacity:100%;
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
    
  transform: translate(-1%, 80%);
  color:#FFFFFF;
  }
  p {
    font-size: 1.2rem;
    transform: translate(-1%, 50%);
  }
  h2 {
    transform: translate(-1%, 10%);
    
  }
`;
export const Button = styled.button`
  position: absolute;
  transform: translate(-30%, 155%);
  width: 8rem;
  background-color:#FFFFFF;
  color:black;
`;

export const Type = styled.div`
  position: absolute;
  transform: translate(-1%, 15%);
  display: flex;
  gap: 0.2rem;

`;
