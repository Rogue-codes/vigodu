import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import { lastsection } from "../../utils/data";

function LastSection() {
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

  return (
    <Container>
      {lastsection.map((item, i) => (
        <Card
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={leftVariants}
        >
          <Left>
            <img src={item.img} alt="" />
          </Left>
          <Right>
            <h2>{item.bgText}</h2>
            <p>{item.smText}</p>
          </Right>
        </Card>
      ))}
    </Container>
  );
}

export default LastSection;

const Container = styled.div`
@media (max-width: 768px) {
    flex-direction: column;
}
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
  padding: 2% 5%;
  margin-bottom: 15%;
`;
const Card = styled(motion.div)`
@media (max-width: 768px) {
    width: 100%;
}
  width: 45%;
  height: 40vh;
  border-radius: 16px;
  background: #f6f7fb;
  display: flex;
  justify-content: flex-start;
  padding: 2%;
  gap: 5%;
`;
const Left = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const Right = styled.div`
  width: 80%;
  height: auto;
  h2 {
    @media (max-width: 768px) {
    font-size: 1.1rem;
}
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;
    line-height: 24px;
    margin-bottom: 5%;
    color: #000000;
  }
  p {
    @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
}
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 1.3vw;
    width: 80%;
    line-height: 22px;
    color: #7e909f;
  }
`;
