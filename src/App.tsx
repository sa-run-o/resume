import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
function App() {
  return (
    <SContainer>
      <SMotionBox
        animate={{
          scale: [1, 2, 2, 3, 3],
          rotate: [180, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "0%", "50%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </SContainer>
  );
}

export default App;
const SMotionBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: green;
`;
const SContainer = styled.div`
  background-color: blue;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
