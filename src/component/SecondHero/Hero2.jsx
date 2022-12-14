import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import {
  activity,
  dots,
  group1,
  group2,
  group3,
  location,
  microphone,
  video,
} from "../../assets";

function Hero2() {
  const data = {
    h1: "Vigodu makes it easy for you to connect with each other",
    p: "A video conferencing platform that is easy and free to use by everyone including you.",
    flex: [
      {
        icon: activity,
        text: "Bet Quality",
      },
      {
        icon: video,
        text: "Quality Videos",
      },
      {
        icon: location,
        text: "Around the world",
      },
      {
        icon: microphone,
        text: "Clear Sound",
      },
    ],
  };

  const dataRt = {
    img1: group1,
    img2: group2,
    img3: group3,
  };
  const scrollRef = useRef(null);
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
      <Left
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        variants={leftVariants}
      >
        <h2>{data.h1}</h2>
        <p>{data.p}</p>
        <Flex>
          {data.flex.map((item, i) => (
            <Cards id={i}>
              <div className="image">
                <img src={item.icon} alt="" />
              </div>
              <span>{item.text}</span>
            </Cards>
          ))}
        </Flex>
      </Left>
      <Right>
        <motion.div
          className="rt-card"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={right1Variants}
        >
          <img src={dataRt.img1} alt="" />
        </motion.div>

        <motion.div
          className="rt-card-1"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={right2Variants}
        >
          <img src={dataRt.img2} alt="" />
        </motion.div>

        <motion.div
          className="rt-card-2"
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={right3Variants}
        >
          <img src={dataRt.img3} alt="" />
        </motion.div>
        <div className="dot">
          <img src={dots} alt="" />
        </div>
        <div className="dot1">
          <img src={dots} alt="" />
        </div>
      </Right>
    </Container>
  );
}

export default Hero2;
const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  min-height: 100vh;
  background: #f5f6fa;
  display: flex;
  padding: 2% 5%;
  padding-bottom: 15%;
`;
const Left = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 15%;
  }
  width: 50%;
  height: 100vh;
  h2 {
    @media (max-width: 768px) {
      width: 100%;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    width: 70%;
    color: #183b56;
  }
  p {
    @media (max-width: 768px) {
      width: 100%;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    width: 70%;
    font-size: 18px;
    line-height: 22px;
    margin-top: 5%;
    color: #7e909f;
  }
`;
const Right = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 50%;
  height: auto;
  position: relative;
  .rt-card {
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0%;
    }
    width: 55%;
    height: 30vh;
    margin-left: 15%;
    z-index: 999990;
    background: white;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .rt-card-1 {
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0%;
    }
    width: 55%;
    height: 30vh;
    margin-top: 10%;
    margin-left: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .rt-card-2 {
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0%;
    }
    width: 55%;
    height: 30vh;
    margin-top: 10%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .dot {
    width: 25%;
    height: 21vh;
    top: 90%;
    left: -10%;
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
    top: 10%;
    left: 5%;
    position: absolute;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
const Flex = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
`;
const Cards = styled.div`
  width: 49%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #274861;
  }
`;
