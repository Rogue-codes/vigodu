import React from 'react'
import styled from 'styled-components'

function NavButton({content}) {
  return (
    <Container>{content}</Container>
  )
}

export default NavButton

const Container = styled.button`
    width: 15%;
    height: 6vh;
    border: 1px solid #00CC8F;
    background: transparent;
    color: #00CC8F;
    border-radius: 5px;
;
`