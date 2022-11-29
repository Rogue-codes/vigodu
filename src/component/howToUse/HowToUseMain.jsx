import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import { dots, howto1, howto2, howto3 } from "../../assets";
import Button from "../../widgets/button/Button";

function HowToUseMain() {
  const scrollRef = useRef(null);
  const data = {
    h1: "Open the URL address, then type “vigodu.com”",
    p: "Open the browser that you each have, then type “vigodu.com” to proceed to the next step, which is logging account.",
    btnContent: "LEARN MORE",
  };

  const rightVariants = {
    hide: {
      opacity: 0,
      x: "15%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const right1Variants = {
    hide: {
      opacity: 0,
      y: "-15%",
    },
    show: {
      opacity: 1,
      y: "0%",
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

  const right3Variants = {
    hide: {
      opacity: 0,
      y: "15%",
    },
    show: {
      opacity: 1,
      y: "0%",
      transition: { delay: 3, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  return (
    <Container>
      <Left>
        <motion.div
          className="cards"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={right1Variants}
        >
          <img src={howto1} alt="" />
        </motion.div>

        <motion.div
          className="cards1"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={right2Variants}
        >
          <img src={howto2} alt="" />
        </motion.div>

        <motion.div
          className="cards2"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={right3Variants}
        >
          <img src={howto3} alt="" />
        </motion.div>

        <div className="dot">
          <img src={dots} alt="" />
        </div>

        <div className="dot1">
          <img src={dots} alt="" />
        </div>
      </Left>
      <Right
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        variants={rightVariants}
      >
        <h2>{data.h1}</h2>
        <p>{data.p}</p>
        <Button content={data.btnContent} />
      </Right>
    </Container>
  );
}

export default HowToUseMain;
const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 50%;
  height: 100vh;
  position: relative;
  .cards {
    width: 60%;
    height: 30vh;
    position: absolute;
    top: 15%;
    left: 15%;
    z-index: 99999;
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
  .cards1 {
    width: 50%;
    height: 20vh;
    position: absolute;
    top: 40%;
    left: 35%;
    z-index: 99999999;
    background: white;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

      z-index: 99999;
    }
  }
  .cards2 {
    width: 70%;
    height: 40vh;
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 99999;
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
  .dot {
    width: 25%;
    height: 21vh;
    top: 75%;
    left: -5%;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .dot1 {
    width: 25%;
    height: 21vh;
    top: 5%;
    left: 60%;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
const Right = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
  width: 50%;
  height: 100vh;
  padding-left: 2%;
  h2 {
    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.5rem;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 2.5vw;
    width: 70%;
    line-height: 39px;
    margin: 8% 0%;
    color: #183b56;
  }
  p {
    @media (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
    }
    font-family: "Inter";
    font-style: normal;
    width: 70%;
    font-weight: 500;
    font-size: 1.5vw;
    line-height: 150%;
    margin: 5% 0%;
    /* or 24px */

    color: #7e909f;
  }
`;
