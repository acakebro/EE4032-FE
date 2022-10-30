import React from 'react'
import styled from 'styled-components'
import "@fontsource/sora"
import DrawSvg from './DrawSvg'

const Section = styled.section`
margin-top: -18px;
padding-bottom: 40px;
min-height: 100vh;
width: 100vw;
// background-color: #120458;
background-image: linear-gradient(180deg, #0E0B16 0%, #fe75fe 99%);
position: relative;
`

const Title = styled.h1`
font-size: 60px;
text-transform: capitalize;
width: 80%;
color: #fff;
font-family: 'Sora';
align-self: flex-start;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid #fff;
width: fit-content;
margin-bottom: 100px;
`;

const Container = styled.div`
width: 70%;
height: 200vh;
// background-color: #fff;
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
border: 3px solid #fff
`

const Box = styled.p`
height: fit-content;
background-color: #fff
color: #fff;
padding: 1rem;
position: relative;
border: 1px solid #fff;

`

const SubTitle = styled.span`
display: block;
font-size: 40px;
text-transform: capitalize;
color: #fff;

`

const Text = styled.span`
display: block;
font-size: 30px;
text-transform: capitalize;
color: #fff;

font-weight: 400;
margin: 0.5rem 0;
`

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

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
        <RoadMapItem title="Project launch" subtext="Smart contract audit"/>
        <RoadMapItem title="Q1" subtext="NFT sale, Whitelist and Token Generation Event"/>
        <RoadMapItem title="Q2" subtext="Partnership Announcements, DEX listing"/>
        <RoadMapItem title="Q3" subtext="Marketplace integration, Community launchpad"/>
        <RoadMapItem title="Q4" subtext="New White Paper, Further chains integration"/>
        <RoadMapItem title="2023" subtext="Profit-sharing release, Fully interoperable platform"/>
      </Items>
      </Container>
      </Section>

  )
}

export default Roadmap