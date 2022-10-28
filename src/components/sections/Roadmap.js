import React from 'react'
import styled from 'styled-components'
import "@fontsource/sora"
import DrawSvg from './DrawSvg'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: #fff;
positionL relative;
`

const Title = styled.h1`
font-size: 60px;
text-transform: capitalize;
width: 80%;
color: #202020;
font-family: 'Sora';
align-self: flex-start;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid #202020;
width: fit-content;
`;

const Container = styled.div`
width: 70%;
height: 200vh;
background-color: #fff;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const SvgContainer = styled.div`
display: flex;
justify-content: cente;
align-items: center;
`

const Items = styled.ul`
list-style:none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background-color: lightblue;

&>*:nth-of-type(2n+1) {
  justify-content: start;

  div {
    border-radius: 50px 0 50px 0;
    text-align: right;
  }

  p {
    border-radius: 40px 0 40px 0;
  }
}

&>*:nth-of-type(2n) {
  justify-content: end;

  div {
    border-radius: 0 50px 0 50px;
    text-align: left;
  }

  p {
    border-radius: 0 40px 0 40px;
  }
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid #202020
`

const Box = styled.p`
height: fit-content;
background-color: #202020
color: #fff;
padding: 1rem;
position: relative;
border: 1px solid #202020;

`

const SubTitle = styled.span`
display: block;
font-size: 40px;
text-transform: capitalize;
color: #202020;

`

const Text = styled.span`
display: block;
font-size: 30px;
text-transform: capitalize;
color: #202020;

font-weight: 400;
margin: 0.5rem 0;
`

const RoadMapItem = ({title, subtext}) => {

  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )

}




const Roadmap = () => {
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg/>
        </SvgContainer>

      <Items>
        <Item>&nbsp;</Item>
        <RoadMapItem title="Project launch" subtext=""/>
        <RoadMapItem title="Q1" subtext="NFT sale"/>
        <RoadMapItem title="Q2" subtext="Partnership Announcements"/>
        <RoadMapItem title="Q3" subtext="Marketplace integration"/>
        <RoadMapItem title="Q4" subtext="New White Paper"/>
        <RoadMapItem title="2023" subtext="Profit-sharing release"/>
      </Items>
      </Container>
      </Section>

  )
}

export default Roadmap