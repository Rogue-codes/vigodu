import React from 'react'
import styled from 'styled-components'
import HowToUse from './HowToUse'
import HowToUseMain from './HowToUseMain'
import HowToUseMain2 from './HowToUseMain2'

function HowToUseSection() {
  return (
    <Container>
        <HowToUse/>
        <HowToUseMain/>
        <HowToUseMain2/>
    </Container>
  )
}

export default HowToUseSection
const Container = styled.section`
    width: 100%;
    height: auto;
`