import React from "react";
import styled from "styled-components";
import { CardContent } from "../../utils/data";

function Cards() {
  return (
    <Container>
      {CardContent.map((card) => (
        <Card>
          <Image>
            <img src={card.img} alt="" />
          </Image>
          <Text>
            <h2>{card.lgText}</h2>
            <p>{card.smText}</p>
          </Text>
        </Card>
      ))}
    </Container>
  );
}

export default Cards;

const Container = styled.div`
  width: 90%;
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15%;
`;
const Card = styled.div`
  width: 23%;
  height: auto;
`;
const Image = styled.div`
  width: 100%;
  height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Text = styled.div`
  width: 100%;
  height: 20vh;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;
    width: 80%;
    line-height: 24px;

    color: #183b56;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-top: 5%;
    color: rgba(126, 144, 159, 0.56);
  }
`;
