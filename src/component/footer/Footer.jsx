import React, { useRef } from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";
function Footer() {
  const data = {
    h2: "Vigodu.",
    p: "Lorem ipsum dolor sit amet, consectetur,",
  };

  const Home = ["Homepage", "Featured", "Use Cases", "Integration", "Pricing"];

  const TermCondition = ["Term & Condition", "Privacy Policy"];
  const Contact = ["Contact", "Social Media", "Location", "Careers"];

  const Documentation = ["Documentation", "Question", "Media"];

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
      <Left
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        variants={leftVariants}
      >
        <h2>{data.h2}</h2>
        <p>{data.p}</p>
        <div className="icons">
          <AiFillFacebook size="2rem" color="white" />
          <AiFillTwitterCircle size="2rem" color="white" />
          <AiFillInstagram size="2rem" color="white" />
        </div>
      </Left>
      <Right>
        <motion.ul
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={leftVariants}
        >
          {Home.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </motion.ul>

        <motion.ul
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={leftVariants}
        >
          {Contact.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </motion.ul>
        <motion.ul
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={leftVariants}
        >
          {Documentation.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </motion.ul>
        <motion.ul
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          variants={leftVariants}
        >
          {TermCondition.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </motion.ul>
      </Right>
    </Container>
  );
}

export default Footer;
const Container = styled.footer`
  width: 100%;
  height: 70vh;
  background: #242a2d;
  display: flex;
  justify-content: center;
  padding: 9%;
`;
const Left = styled(motion.div)`
  width: 30%;
  height: 100%;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    /* identical to box height */
    margin: 5% 0%;
    color: #ffffff;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    color: #acadae;
  }
  .icons {
    margin-top: 5%;
    display: flex;
    justify-content: flex-start;
    gap: 5%;
  }
`;
const Right = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ul {
    width: 30%;
    list-style-type: none;
    li {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 1.3vw;
      line-height: 19px;
      margin-top: 5%;
      color: #acadae;
    }
  }
`;
