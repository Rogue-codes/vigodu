import React from "react";
import styled from "styled-components";

function Advantages() {
  const data = {
    title: "What advantages of using Vigodu?",
    desc: "This video conferencing platform has advantages that most other platform do not have, This is intended so that users remain comfortable when using this application.",
  };
  return (
    <Container>
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </Container>
  );
}

export default Advantages;
const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 9%;
  p {
    width: 45%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 24px;

    color: #7e909f;
  }
  h2 {
    width: 45%;
    font-size: 3vw;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    line-height: 48px;

    color: #183b56;
  }
`;
