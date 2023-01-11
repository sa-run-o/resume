import React, { useContext } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { ModeContext } from "./contexts/theme";
function App() {
  const { mode } = useContext(ModeContext);
  return (
    <ThemeProvider theme={theme[mode]}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
