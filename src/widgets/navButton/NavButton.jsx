import React from "react";
import styled from "styled-components";

function NavButton({ content }) {
  return <Container>{content}</Container>;
}

export default NavButton;

const Container = styled.button`
  @media (max-width: 768px) {
    display: none;
  }
  width: 15%;
  height: 6vh;
  border: 1px solid #00cc8f;
  background: transparent;
  color: #00cc8f;
  border-radius: 5px; ;
`;
