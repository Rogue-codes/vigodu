import React from 'react'
import styled from 'styled-components'
import { partners } from '../../utils/data'

function Partners() {
  return (
    <Container>
        {
            partners.map((partner)=>(
                <Card key={partner.id}>
                    <img src={partner.logo} alt="" />
                </Card>
            ))
        }
    </Container>
  )
}

export default Partners
const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 5% 8%;
    align-items: center;
`
const Card = styled.div`
    width: 18%;
    height: 10vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`