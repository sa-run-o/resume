import { styled } from "styled-components";
import { convertToRoman } from "../../utils/convert";
import { deviceSize } from "../../store/deviceSizeStore";
interface IIndexSession {
  session: {
    targetDivRef2: React.RefObject<HTMLDivElement>;
  };
}
const IndexSession = ({ session }: IIndexSession) => {
  const indexMenu = [
    { text: "PROFILE", value: "profile" },
    { text: "EXPERIENCE", value: "experience" },
    { text: "CONTACT", value: "contact" },
  ];
  const scrollToTarget = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <SContainer>
      <div className="title">CURRICULUM VITAE.</div>
      <div className="menu">
        {indexMenu.map((menu, i) => {
          return (
            <SMenu
              onClick={() => {
                scrollToTarget(session.targetDivRef2);
              }}
            >
              <div className="title">{`${convertToRoman(i + 1)}.`}</div>
              <div className="text">{`${menu.text}.`}</div>
            </SMenu>
          );
        })}
      </div>
    </SContainer>
  );
};
export default IndexSession;
const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    &.title {
      font-size: 6vw;
      color: ${({ theme }) => theme.contrast};
    }
    &.menu {
      display: flex;
      @media (max-width: ${deviceSize.tablet}) {
        flex-direction: column;
        align-items: center;
      }
      justify-content: space-evenly;
      width: fit-content;
      width: 60vw;
      flex-wrap: wrap;
      gap: 15px;
    }
  }
`;
const SMenu = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
  width: 15vw;
  height: 40px;
  &:hover {
    & > div {
      &.title {
        font-size: 3vw;
      }
      &.text {
        font-size: 2vw;
      }
    }
  }
  & > div {
    &.title {
      font-style: italic;
      font-size: 2.5vw;
      color: ${({ theme }) => theme.main};
    }
    &.text {
      font-style: italic;
      font-size: 1.5vw;
      color: ${({ theme }) => theme.contrast};
    }
  }
`;
