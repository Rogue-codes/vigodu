import React from 'react'
import styled from "styled-components"
import Advantages from '../component/advantages/Advantages'
import Cards from '../component/cards/Cards'
import Footer from '../component/footer/Footer'
import Hero from '../component/heroSection/Hero'
import HowToUseSection from '../component/howToUse/HowToUseSection'
import LastSection from '../component/lastSection/LastSection'
import Nav from '../component/nav/Nav'
import Partners from '../component/partners/Partners'
import Hero2 from '../component/SecondHero/Hero2'
function Home() {
  return (
    <Container>
        <Nav/>
        <Hero/>
        <Partners/>
        <Advantages/>
        <Cards/>
        <Hero2/>
        <HowToUseSection/>
        <LastSection/>
        <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`