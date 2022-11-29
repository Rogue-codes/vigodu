import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { earth, heroImg1, heroImg2, heroImg3, polygon } from "../../assets";
import Button from "../../widgets/button/Button";

function Hero() {
  const topVariants = {
    hide: { y: "-100%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { delay: 0.5, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const leftVariants = {
    hide: { x: "-10%", opacity: 0 },
    show: {
      x: "0%",
      opacity: 1,
      transition: { delay: 1.5, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const rightVariants = {
    hide: { x: "10%", opacity: 0 },
    show: {
      x: "0%",
      opacity: 1,
      transition: { delay: 2.5, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const variants = {
    hide: { scale: 0.5, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  return (
    <Container>
      <FlexBox>
        <Left animate="show" initial="hide" variants={variants}>
          <p>VIDEO CONFERENCING</p>
          <h2>
            Amazing Platform: <br />
            Best For Online <br />
            Conference Video
          </h2>
          <br />
          <span>
            By using this website platform everyone can connect <br /> to each
            other quickly and easily.
          </span>
          <ButtonContainer>
            <Button content="Get Started" />
            <PlayDemo>
              <div className="image">
                <img src={polygon} alt="" />
              </div>
              <p>PLAY DEMO</p>
            </PlayDemo>
          </ButtonContainer>
        </Left>
        <Right>
          <Top animate="show" initial="hide" variants={topVariants}>
            <img src={heroImg1} alt="" />
          </Top>
          <Bottom>
            <Card animate="show" initial="hide" variants={leftVariants}>
              <img src={heroImg2} alt="" />
            </Card>
            <Card animate="show" initial="hide" variants={rightVariants}>
              <img src={heroImg3} alt="" />
            </Card>
          </Bottom>
        </Right>
      </FlexBox>
    </Container>
  );
}

export default Hero;
const Container = styled.div`
  width: 100%;
  height: auto;
  background: url(${earth}), #242a2d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15%;
`;
const FlexBox = styled.div`
  @media (max-width: 768px) {
    margin-top: 15%;
    flex-direction: column;
    width: 100%;
    padding-left: 0%;
    padding: 5%;
    height: auto;
  }
  width: 95%;
  padding: 0% 15%;
  height: 100vh;
  margin-top: 10%;
  display: flex;
  padding: 2% 0%;
  padding-left: 7%;
`;
const Left = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5%;
  }
  width: 48%;
  height: 100%;
  p {
    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.6rem;
      line-height: 44px;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.4vw;
    line-height: 22px;
    /* identical to box height */
    margin-top: 5%;
    color: #50b6b4;
  }
  h2 {
    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.2rem;
      line-height: 44px;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 4vw;
    line-height: 77px;
    margin-top: 5%;
    color: #ffffff;
  }
  span {
    @media (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
      line-height: 14px;
    }
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 1.3vw;
    line-height: 29px;
    color: #ffffff;
  }
`;
const Right = styled.div`
  @media (max-width: 768px) {
    margin-top: 15%;
    width: 100%;
    line-height: 44px;
  }
  width: 48%;
  height: 100%;
`;
const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 5%;
    flex-direction: column;
    align-items: flex-start;
  }
  width: 100%;
  margin-top: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
`;
const PlayDemo = styled.div`
  @media (max-width: 768px) {
    width: 50%;
    margin-top: 5%;
  }
  display: flex;
  justify-content: flex-start;
  gap: 10%;
  height: 7vh;
  align-items: center;
  width: 40%;
  .image {
    @media (max-width: 768px) {
      height: 40px;
      width: 60px;
    }
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 1%;
    background: #00cc8f;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  p {
    margin-top: -1%;
    font-size: 18px;
  }
`;

const Top = styled(motion.div)`
  width: 100%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Bottom = styled.div`
  @media (max-width: 768px) {
    margin-top: 2%;
  }
  width: 100%;
  height: 50%;
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Card = styled(motion.div)`
  width: 49%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
