import React from 'react'
import styled from 'styled-components'

function Button({content}) {
  return (
    <Container>{content}</Container>
  )
}

export default Button
const Container = styled.button`
    width: 40%;
    font-size: 20px;
    cursor: pointer;
    height: 9vh;
    color: white;
    border: none;
    border-radius: 5px;
    background:#00CC8F;
`