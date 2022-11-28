import React from "react";
import styled from "styled-components";
import { links } from "../../utils/data";
import NavButton from "../../widgets/navButton/NavButton";
import { motion } from "framer-motion";
function Nav() {
  const variants = {
    hide: { opacity: 0, y: -150 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <Container initial="hide" animate="show" variants={variants}>
      <Logo>Vigodu.</Logo>

      <Links>
        {links.map((link) => (
          <li key={link.id}>{link.name}</li>
        ))}
      </Links>

      <NavButton content="Create Account" />
    </Container>
  );
}

export default Nav;
const Container = styled(motion.nav)`
  width: 100%;
  height: 15vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 10%;
`;
const Logo = styled.p`
  font-weight: 600;
  color: #50b6b4;
  font-size: 22px;
`;
const Links = styled.ul`
  width: 45%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    color: white;
  }
`;
