import React, { useContext } from "react";
import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { ModeContext } from "./contexts/theme";
function App() {
  const { mode } = useContext(ModeContext);
  return (
    <ThemeProvider theme={theme[mode]}>
      <SContainer>
        <Menubar />
        <Home />
      </SContainer>
    </ThemeProvider>
  );
}

export default App;
const SContainer = styled.div`
  display: flex;
`;
