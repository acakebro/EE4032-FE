import React from 'react';
import {useState} from 'react';
import styled from "styled-components";
import Overlay from './Overlay';
import ProjectCard from '../ProjectCard';
import { ProjectContainer } from '../ProjectCardStyles';
import { ProjectData } from '../ProjectData';
import Modal from './Modal';

const Section = styled.div`
   min-height: 100vh;
   width: 100vw;
   background-color: #202020;
   position: relative;
   margin-top: -20px;
`

const Title = styled.h1`
font-size: 40px;
text-transform: capitalize;
color: ##fff;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
padding-top: 120px;
margin-bottom: 50px;
border-bottom: 2px solid;
width: fit-content;


`

const Projects = () => {

   const [open, setOpen] = useState(false);

   const openModal = () => {
    setOpen(true);
  }

   const closeModal = () => {
    setOpen(false);
  }

  return (
    <>
    <Section id="projects">
      <Title>Latest Projects</Title>
   
      <ProjectContainer>
        {ProjectData?.map((item) => {
          return (
            <>
            <ProjectCard data={item} open={openModal}/>
             {/* <Link to="home" className='navbar-logo' spy={true} smooth={true} offset={-20} duration={500} onClick={closeMobileMenu}>
          TRUEPNL  <i className="fa-solid fa-globe"></i>
        </Link> */}
            {/* {open && 
            (<Overlay close={closeModal}>
            <Modal data={item}  close={closeModal}/>
            </Overlay>)
            } */}
            </>
             )
          })} 
      </ProjectContainer>
          </Section>
          </>
  )
}

export default Projects