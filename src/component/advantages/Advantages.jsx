import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

function Advantages() {
  const scrollRef = useRef(null);
  const data = {
    title: "What advantages of using Vigodu?",
    desc: "This video conferencing platform has advantages that most other platform do not have, This is intended so that users remain comfortable when using this application.",
  };

  const variants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 2, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <Container
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      ref={scrollRef}
      variants={variants}
    >
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </Container>
  );
}

export default Advantages;
const Container = styled(motion.div)`
@media (max-width: 768px) {
    flex-direction: column;
    height: auto;
}
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 9%;
  p {
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1.3rem;
        line-height: 44px;
    }
    width: 45%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 24px;

    color: #7e909f;
  }
  h2 {
    @media (max-width: 768px) {
        width: 100%;
        font-size: 2rem;
        /* line-height: 44px; */
    }
    width: 45%;
    font-size: 3vw;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    line-height: 48px;

    color: #183b56;
  }
`;
