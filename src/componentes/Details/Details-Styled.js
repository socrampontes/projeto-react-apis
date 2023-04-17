import styled from "styled-components";

import(
 "https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
);

export const Details = styled.div`
  background-color: #5d5d5d;
  height:120vh;
`;
export const CardFormat = styled.div`
  background-color:${(props) => {
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
  }} ;
  border-radius: 2vw;
  background-image: url(/img/pngwing.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size:50%;
  margin: 2%;
  display: flex;
  position: relative;
  gap: 3%;
  padding:1vw; 
  width:94%;
`;
export const TittleDetalais = styled.h1`
  font-size: 3vw;
  
  margin:0 0 4% 2%;
  padding-top:4%;
`;

export const Img = styled.img`
  display: flex;
  width:100%;
  transform: translate(-5%, -55%);
  `;
export const ImgSub = styled.img`
  width: 100%;
  display:flex:
  align-self:center;
  border-radius:0.8vw;
  background-color:#FFFFFF;
  border:1px black solid;
  margin:4%;
  `;
export const DivOrganization = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left:2%;
  h4{
    margin:8% 0 -10% 0;
  }
  h1{
    font-size:3vw;
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
  
  span {
    margin-top:1%;
    color: #737373;
    font-family: "Montserrat", sans-serif;
    font-size:1vw;
    display:flex; 
    justify-content: end;
    span{
      margin:0 2% 0 6%;
      color:black;
     
    }
  }
  `;
  export const BarraStats = styled.div`
    height: 1.5vh;
    border-radius: 10px;
    width:61%;
    margin:1.5% 0 0 5%;
  `;
  export const Stats = styled.div`
    height: 100%;
    border-radius: 10px;
    background-color: black;
    width: 50%;
  `;

export const Move = styled.div`
  margin: 2% 0 8% 0;
  span{
    display:inline
    text-align:center;
    font-family: "Montserrat", sans-serif; 
    background: #ececec;
    border: 1.7px dashed #ffffff;
    border-radius: 12px;
    padding:3% 5% 3% 5%;
    color: black;
    font-size: 1vw;
    
  }
  `;
export const H2 = styled.h2`
  color: black;
  font-size:1.8vw;
  margin-bottom:5%;
  
`;
export const Moves = styled.div`
  background-color: #ffffff;
  height: 100%;
  margin: 15% 0 5% 0;
  border-radius: 0.8vw;
  padding:5%;
`;

export const Type = styled.div`
  margin: 20% 0 0 0;
  display: flex;
  gap: 0.2rem;
`;
