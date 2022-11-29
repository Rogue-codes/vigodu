import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import { dots, howto22, howto23 } from "../../assets";
import Button from "../../widgets/button/Button";

function HowToUseMain2() {
  const scrollRef = useRef(null);
  const data = {
    h1: "Choose play to start video conferencing",
    p: "Completing the login process you can click “get started” then select “play” to do video conferencing then the process at this stage is complete.",
    btnContent: "LEARN MORE",
  };

  const leftVariants = {
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

  const right1Variants = {
    hide: {
      opacity: 0,
      x: "-15%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const right2Variants = {
    hide: {
      opacity: 0,
      x: "15%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 2, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const circleVariants = {
    hide: {
      opacity: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { delay: 3, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  return (
    <Container>
      <Left
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        variants={leftVariants}
      >
        <h2>{data.h1}</h2>
        <p>{data.p}</p>
        <Button content={data.btnContent} />
      </Left>
      <Right>
        <motion.div
          className="card1"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={right1Variants}
        >
          <img src={howto22} alt="" />
        </motion.div>
        <motion.div
          className="card2"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={right2Variants}
        >
          <img src={howto23} alt="" />
        </motion.div>
        <motion.div
          className="circle"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={circleVariants}
        >
          <p>P</p>
        </motion.div>
        <motion.div
          className="circle2"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={circleVariants}
        >
          <p>L</p>
        </motion.div>
        <div className="dot">
          <img src={dots} alt="" />
        </div>
      </Right>
    </Container>
  );
}

export default HowToUseMain2;
const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 15%;
    margin-bottom: 5%;
    min-height: auto;
  }
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const Left = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
  width: 50%;
  height: 100vh;
  h2 {
    @media (max-width: 768px) {
      width: 100%;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    width: 80%;
    margin: 5% 0%;
    color: #183b56;
  }
  p {
    @media (max-width: 768px) {
      width: 100%;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    margin: 5% 0%;
    /* or 24px */
    width: 80%;
    color: #7e909f;
  }
`;
const Right = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15%;
    height: 60vh;
  }
  width: 50%;
  height: auto;
  position: relative;
  .card1 {
    width: 70%;
    height: 30vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999;
    background: white;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  }
  .card2 {
    @media (max-width: 768px) {
        height: 40vh;
    }
    width: 70%;
    height: 60vh;
    position: absolute;
    top: 20%;
    left: 30%;
    z-index: 900;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  }
  .circle {
    @media (max-width: 768px) {
      left: 10%;
      margin-top: 25%;
    }
    background: #52bbb9;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    top: 35%;
    left: 15%;
  }
  .circle2 {
    background: #52bbb9;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    top: 0;
    left: 85%;
  }
  .dot {
    width: 25%;
    height: 21vh;
    top: -10%;
    left: -15%;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
