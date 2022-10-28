import React from 'react';
import styled from "styled-components";
import { Button } from './Button';
import Typewriter from "typewriter-effect";

const Section = styled.div`
   min-height: 100vh;
   width: 100%;
   background-color: #0C0032;
   color: #fff;

   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
  `

const Container = styled.div`
width: 95%;
min-height: 80vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h2`
font-size: 50px;
text-transform: capitalize;
color: #fff;
align-self: flex-start;
width: 80%;
margin: 0 auto;
`

const SubText = styled.p`
font-size: 26px;
text-transform: capitalize;
color: #fff;
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`

const SubTextLight = styled.p`
font-size: 26px;
text-transform: capitalize;
color: #fff;
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`



const Getstarted = () => {
  return (
    <Section id="getstarted">
      <Container>
        <Box>
          <Title>
            <Typewriter options={{
              strings: ['Invest with as little as 0.1ETH', 'What are you waiting for?'],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
              delay: 50
            }}
            />
          </Title>
        <SubText>
          <i class="fa-solid fa-arrow-right"></i>
          &nbsp;
          View our latest projects below
        </SubText>
        <SubTextLight>
          <i class="fa-solid fa-arrow-right"></i>
          &nbsp;
          Hover over a project to view project statistics 
        </SubTextLight>
        </Box>
         <Box>
          <img src="https://i.pinimg.com/originals/17/8b/b1/178bb1585641435b45470d6edd8207b6.jpg" height="400px" ></img>
        </Box>
      </Container>
    </Section>
  )
}

export default Getstarted

