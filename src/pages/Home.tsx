import { useContext } from "react";
import styled from "styled-components";
import { ModeContext } from "../contexts/theme";
import ToggleSwitch from "../components/ToggleSwitch";

const Home = () => {
  const { mode, setMode } = useContext(ModeContext);
  return (
    <SContainer>
      <ToggleSwitch
        value={mode}
        isOn="sun"
        isOff="moon"
        onToggleSwitch={setMode}
      />
    </SContainer>
  );
};
export default Home;
const SContainer = styled.div`
  background-color: ${({ theme }) => theme.main};
`;
