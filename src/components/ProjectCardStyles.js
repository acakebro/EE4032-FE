import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   min-height: 100vh;
   width: 100%;
   background-color: #202020;
 

  `
export const Card = styled(motion.div)`
height: 470px;
// width: 50%;
margin: 1rem;
background: #343444;
border-radius: 20px;
margin-bottom: 40px;
overflow: hidden;
cursor: pointer;
transition: all 3s ease-in-out;
`

export const CardMedia = styled(motion.div)`
height: auto;
margin: 15px;
position: relative;
border-radius: 20px;
overflow: hidden;

img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  transition: all 0.4s ease;
}
`

export const Featured = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
padding: 0 10px;
position: absolute;
bottom: 25px;
left: 50%;
transform: translateX(-50%);
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 14px;
line-height: 23px;
text-transform: uppercase;
border-radius: 13px;
background-color: #343444;
height: 36px;
width: 151px;

`

export const FeatureTitle = styled.span`
text-align: center;
letter-spacing: 1px;
`

export const StatusRibbon = styled.div`
background-color: ${({ fundStatus }) =>
    fundStatus === 1 ? "#66A858" : "#df4949"};
border-radius: 13px;
padding: 3px 10px;
position: absolute;
right: 10px;
top: 10px;

`

export const Status = styled.span`
font-size: 14px;

`

export const CardBody = styled.div`
padding: 4px 20px 20px 20px;
`

export const CardTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 18px;
letter-spacing: 2px;
margin-bottom: 12px
`

export const MetaInfo = styled.div`
height: auto;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 4px;
`

export const Author = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
text-align: left;
`

export const Avatar = styled.div`
width: 50px;
height: 50px;
border-radius: 30px;
overflow: hidden;
margin-right: 12px;
flex-shrink: 0;

img {
  object-fit: cover;
  width: 100%;
  height: 100%
}
`

export const Info = styled.div`
`

export const PriceInfo = styled.div`
max-width: 140px;
`
export const Price = styled.h5`
display: flex;
margin-top: 6px;
`

export const PriceText = styled.div`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
margin-right: auto 0.3rem;
`

export const TagsCta = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Tags = styled.div`
width: fit-content;
padding: 0 7px;
font-size: 12px;
border-radius: 6px;
height: 24px;
line-height: 24px;
text-align: center;
font-weight: bold;
font-size: 12px;
background-color: #5142fc;
letter-spacing: 0.1rem;
text-transform: uppercase;
`

export const CtaGrp = styled.div`
display: flex;
`

export const CtaLink = styled.a`
width: fit-content;
padding: 0 6px;
height: 24px;
text-align: center;
font-weight: bold;
font-size: 12px;
background-color: #474757;
border-radius: 6px;
letter-spacing: 0.1rem;
text-transform: uppercase;
margin-left: 4px;
transition: background color .25s ease;
cursor: pointer;
z-index: 1;
text-decoration: none;
color: #fff
`
export const MetaList = styled(motion.div)``

export const MetaListItem = styled.div`
font-weight: 500;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 14px;
padding: 14px 0;

&:not(:last-child) {
  border-bottom: 1px solid #232332;
}

&>:last-child {
  font-size: 16px;
  font-weight: 700;
  text-align: right;

}

`







