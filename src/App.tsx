import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import Melt from "./components/melt";
import { motion, useScroll, useSpring } from "framer-motion";
import IndexSession from "./components/sessions/IndexSession";
import { useThemeStore } from "./store/themeStore";
import ScrollToTop from "./components/scrollToTop";
function App() {
  const theme = useThemeStore((state) => state.theme);
  const targetDivRef1 = useRef<HTMLDivElement>(null);
  const targetDivRef2 = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });
  const setThemeBasedOnTime = useThemeStore(
    (state) => state.setThemeBasedOnTime
  );
  const checkScrollPosition = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    setThemeBasedOnTime();
  }, [setThemeBasedOnTime]);
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container ref={targetDivRef1}>
        <Header />
        <Melt y={y} />
        <Session className="first">
          <div className="content">
            <IndexSession
              session={{
                targetDivRef2: targetDivRef2,
              }}
            />
          </div>
        </Session>
        <Session ref={targetDivRef2}>2</Session>
        <Footer />
        {showButton && (
          <ScrollToTop
            onclick={() => {
              targetDivRef1.current?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Session = styled(motion.div)`
  width: 100%;
  height: 100vh;
  min-height: 100px;
  &.first {
    height: 90vh;
  }
  & > div {
    &.content {
      width: 100%;
      height: 100%;
    }
  }
`;

const Container = styled.div`
  font-size: 16px;
  height: fit-content;
  display: grid;
  overflow-x: hidden;
  grid-template: fit-content / 1fr;
  position: relative;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.second};
`;
