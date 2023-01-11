import { useContext } from "react";
import styled from "styled-components";
import { ModeContext } from "../contexts/theme";
import ToggleSwitch from "./ToggleSwitch";

const Menubar = () => {
  const data = ["PROFILE", "EXPERIENCE"];
  const { mode, setMode } = useContext(ModeContext);
  return (
    <SContainer>
      <SToggleSwitch>
        <ToggleSwitch
          value={mode}
          isOn="sun"
          isOff="moon"
          onToggleSwitch={setMode}
        />
      </SToggleSwitch>
      <SContent>
        <SHeader>CONTENTS</SHeader>
        {data.map((e, i) => {
          return <STopic key={i}>{e}</STopic>;
        })}
      </SContent>
    </SContainer>
  );
};
export default Menubar;
const STopic = styled.div`
  line-height: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  margin-left: 20px;
  &:hover {
    color: ${({ theme }) => theme.sub};
  }
`;
const SHeader = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: ${({ theme }) => theme.text};
`;
const SContent = styled.div`
  margin-top: 20px;
  width: 100%;
`;
const SToggleSwitch = styled.div`
  width: 20%;
  height: 3%;
  margin-top: 20px;
`;
const SContainer = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.main};
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100vh;
`;
