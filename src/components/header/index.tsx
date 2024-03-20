import { styled, keyframes } from "styled-components";

const Header = () => {
  return <SContainer></SContainer>;
};

export default Header;

const animate = keyframes`
  0%, 100% {
    clip-path: polygon(
      0% 63%,
      10% 58%,
      20% 56%,
      30% 60%,
      40% 68%,
      50% 78%,
      60% 87%,
      70% 98%,
      80% 100%,
      90% 96%,
      100% 89%,
      100% 0%,
      0% 0%
    );
  }
  50% {
    clip-path: polygon(
      0% 89%,
      10% 96%,
      20% 100%,
      30% 98%,
      40% 87%,
      50% 78%,
      60% 68%,
      70% 60%,
      80% 56%,
      90% 58%,
      100% 63%,
      100% 0%,
      0% 0%
    );
  }
`;

const SContainer = styled.div`
  background-color: ${({ theme }) => theme.main};
  height: 10vh;
  animation: ${animate} 10s ease-in-out infinite;
`;
