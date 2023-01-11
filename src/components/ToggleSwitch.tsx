import { motion } from "framer-motion";
import styled from "styled-components";
interface IToggleSwitch {
  value: string;
  isOn: string;
  isOff: string;
  onToggleSwitch: Function;
}
const ToggleSwitch = ({
  value,
  isOn,
  isOff,
  onToggleSwitch,
}: IToggleSwitch) => {
  const toggleSwitch = () => {
    const result = value === isOn ? isOff : isOn;
    localStorage.setItem("mode", result);
    onToggleSwitch(result);
  };
  return (
    <SSwitch className={value === isOn ? "isOn" : ""} onClick={toggleSwitch}>
      <SHandle
        className={value === isOn ? "isOn" : ""}
        layout
        transition={{
          stiffness: 700,
          damping: 30,
        }}
      />
    </SSwitch>
  );
};
export default ToggleSwitch;
const SSwitch = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  padding: 0px 5px;
  height: 100%;
  cursor: pointer;
  &.isOn {
    justify-content: flex-end;
  }
`;

const SHandle = styled(motion.div)`
  width: 50%;
  height: 80%;
  background-color: rgba(229, 204, 175, 1);
  border-radius: 40px;
  &.isOn {
    background-color: ${({ theme }) => theme.main};
  }
`;
