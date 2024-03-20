import { MotionValue, motion } from "framer-motion";
import { styled } from "styled-components";

/**
 * Props for the Melt component.
 */
interface MeltProps {
  y: MotionValue<any>;
}

/**
 * Melt component.
 */
const Melt: React.FC<MeltProps> = ({ y }) => {
  return <StyledMelt style={{ scaleY: y }} />;
};

export default Melt;

/**
 * Styled Melt component.
 */
const StyledMelt = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0px;
  height: 100vh;
  width: 0.9vw;
  background-color: ${({ theme }) => theme.main};
  transform-origin: top;
  border-radius: 0px 0px 50px 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
