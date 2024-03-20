import { styled } from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
interface IScrollToTop {
  onclick: () => void;
}
const ScrollToTop = ({ onclick }: IScrollToTop) => {
  return (
    <SContainer onClick={() => onclick()}>
      <Arrow />
    </SContainer>
  );
};
export default ScrollToTop;
const SContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
