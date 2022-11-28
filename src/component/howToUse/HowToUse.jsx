import React from "react";
import styled from "styled-components";

function HowToUse() {
  const data = {
    h1: "How to use Vigodu to create a video conference?",
    p: "Here’s an easy wat to use this platform to do video conferencing",
  };
  return (
    <Container>
      <h2>{data.h1}</h2>
      <br />
      <p>{data.p}</p>
    </Container>
  );
}

export default HowToUse;
const Container = styled.div`
  width: 100%;
  min-height: auto;
  padding: 5% 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 3vw;
    width: 70%;
    line-height: 48px;
    text-align: center;

    color: #183b56;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #7e909f;
  }
`;
