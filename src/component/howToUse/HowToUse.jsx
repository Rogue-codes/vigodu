import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

function HowToUse() {
  const scrollRef = useRef(null);
  const data = {
    h1: "How to use Vigodu to create a video conference?",
    p: "Here’s an easy wat to use this platform to do video conferencing",
  };

  const variants = {
    hide: {
      opacity: 0,
      y: "15%",
    },
    show: {
      opacity: 1,
      y: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
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
      <h2>{data.h1}</h2>
      <br />
      <p>{data.p}</p>
    </Container>
  );
}

export default HowToUse;
const Container = styled(motion.div)`
@media (max-width: 768px) {
    padding: 2%;
}
  width: 100%;
  min-height: auto;
  padding: 5% 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    @media (max-width: 768px) {
        font-size: 2rem;
        width: 100%;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 3vw;
    width: 70%;
    line-height: 48px;
    text-align: center;

    color: #183b56;
  }
  p {
    @media (max-width: 768px) {
        font-size: 1.2rem;
        width: 100%;
        line-height: 40px;
        text-align: center;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #7e909f;
  }
`;
