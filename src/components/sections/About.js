import React from 'react';
import styled from "styled-components";
import { Button } from './Button';
import Typewriter from "typewriter-effect";

const Section = styled.div`
   min-height: 100vh;
   width: 100%;
   background-color: #202020;
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
font-size: 60px;
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



const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <img src="https://static.vecteezy.com/system/resources/previews/002/058/317/non_2x/retro-futuristic-80s-background-free-vector.jpg" height="400px"></img>
        </Box>
        <Box>
          <Title>
            <Typewriter options={{
              strings: ['Welcome to QUICKSTART', 'Start investing today'],
              autoStart: true,
              loop: true,
              pauseFor: 1500,
            }}

            // onInit={(typewriter)=> {


            //   typewriter

            //   .typeString("Welcome to Truepnl")

            //   .pauseFor(1000)
            //   .deleteAll()
            //   .typeString("Start investing today")
            //   .start();
            // }}

            />
          </Title>
          <SubText>
            With more than 50+ projects to choose from, start investing today.
          </SubText>
          <SubTextLight>
            All of our projects are carefully selected and vetted to ensure that
            your investments are processed securely.
          </SubTextLight>
        </Box>
      </Container>
    </Section>
  )
}

export default About