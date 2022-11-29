import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import { partners } from "../../utils/data";

function Partners() {
  const scrollRef = useRef(null);
  const variants={
    hide:{
        opacity:0
    },
    show:{
        opacity:1,
        transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    }
  }
  return (
    <Container
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      ref={scrollRef}
      variants={variants}
    >
      {partners.map((partner) => (
        <Card key={partner.id}>
          <img src={partner.logo} alt="" />
        </Card>
      ))}
    </Container>
  );
}

export default Partners;
const Container = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 5% 8%;
  align-items: center;
`;
const Card = styled.div`
  width: 18%;
  height: 10vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
