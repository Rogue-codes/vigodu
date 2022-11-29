import React, { useState } from "react";
import styled from "styled-components";
import { links } from "../../utils/data";
import NavButton from "../../widgets/navButton/NavButton";
import { motion } from "framer-motion";
function Nav() {
  const [clicked, setClicked] = useState(false);
  const [showWrapper, setshowWrapper] = useState(false);
  const toggleMenu = () => {
    setClicked(!clicked);
    setshowWrapper(!showWrapper);
  };
  const variants = {
    hide: { opacity: 0, y: -150 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  const wrapperVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0, transition: { delay: 0.5 } },
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

      <div
        className={
          clicked
            ? "hamburger hamburger--spring is-active"
            : "hamburger hamburger--spring"
        }
        onClick={toggleMenu}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>

      <Wrapper
        initial={false}
        animate={showWrapper ? "open" : "closed"}
        variants={wrapperVariants}
      >
        {links.map((link) => (
          <li key={link.id}>{link.name}</li>
        ))}
      </Wrapper>
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
  z-index: 99999;
  .hamburger {
    @media (max-width: 768px) {
      display: block;
    }
    display: none;
  }
  .hamburger-box {
    width: 40px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #50b6b4;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger--spring .hamburger-inner {
    top: 2px;
    transition: background-color 0s 0.13s linear;
    /* color: #fff; */
  }
  .hamburger--spring .hamburger-inner::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring .hamburger-inner::after {
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important;
  }
  .hamburger--spring.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--spring.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg);
  }
`;
const Logo = styled.p`
  font-weight: 600;
  color: #50b6b4;
  font-size: 22px;
`;
const Links = styled.ul`
  @media (max-width: 768px) {
    display: none;
  }
  width: 45%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    color: white;
  }
`;
const Wrapper = styled(motion.div)`
  width: 45%;
  padding: 2%;
  z-index: 99998999;
  height: 30vh;
  position: fixed;
  border-radius: 5px;
  top: 10%;
  left: 40%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: #50b6b4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  z-index: 999999999;
  li {
    list-style-type: none;
    color: white;
    margin-top: 5%;
    font-size: 1.3rem;
  }
`;
