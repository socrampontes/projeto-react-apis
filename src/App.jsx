import { createGlobalStyle } from "styled-components";
import { Router } from "./Routes/Router";
import { GlobalState } from "./context/GlobalState";

const GlobalStyled = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <GlobalState>
        <Router/>
      </GlobalState>
    </>
  );
}

export default App;
