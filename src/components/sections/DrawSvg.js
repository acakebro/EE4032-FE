import { ConstructorFragment } from 'ethers/lib/utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'
import styled from 'styled-components'
import Vector from './vector'

const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;

svg {
  width: 100%;
  height: 100%;
}

`

function DrawSvg() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   let element  = ref.current;

  //   let svg = document.getElementsByClassName("svg-path")[0];

  //   const length = svg.getBoundingClientRect();

  //   console.log(length);
  
  //   return () => {
      
  //   };
  // }, [])



  return (
    <VectorContainer>
      <Vector/>

    </VectorContainer>
  )
}

export default DrawSvg