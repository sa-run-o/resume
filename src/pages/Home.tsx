import { useContext } from "react";
import styled from "styled-components";
import { ModeContext } from "../contexts/theme";

const Home = () => {
  const { mode, setMode } = useContext(ModeContext);
  return (
    <SContainer
      onClick={() => (mode === "sun" ? setMode("moon") : setMode("sun"))}
    >
      click
    </SContainer>
  );
};
export default Home;
const SContainer = styled.div`
  background-color: ${({ theme }) => theme.main};
`;
