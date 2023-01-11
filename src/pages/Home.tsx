import styled from "styled-components";

const Home = () => {
  return <SContainer>hello</SContainer>;
};
export default Home;
const SContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.sub};
  width: 100%;
  overflow-y: scroll;
`;
