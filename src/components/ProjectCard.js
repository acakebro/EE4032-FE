import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Author, Avatar, Card, CardBody, CardMedia, CardTitle, CtaGrp, CtaLink, Featured, FeatureTitle, Info, MetaInfo, MetaList, MetaListItem, Price, PriceInfo, PriceText, Status, StatusRibbon, Tags, TagsCta } from './ProjectCardStyles';
import Timer from './timer';
const ProjectCard = ({ data, open }) => {
  const [isHovered, setHovered] = useState(false);

  const animateCandMedia = isHovered ? { height: "100px" } : { height: "auto" };
  const showMeta = { opacity: 1, height: "auto" };
  const hideMeta = { opacity: 0, height: 0 };
  const animeMeta = isHovered ? hideMeta : showMeta;
  const animeMetaList = isHovered ? showMeta : hideMeta;
  const transition = {
    duration: 0.25,
    type: "spring",
    bounce: 0.2,
    ease: 'easeIn',
  };



  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      key={data?.id}
      onClick={open}
    >
      <CardMedia animate={animateCandMedia} transition={transition}>
        <img src={data?.projectImage} alt="" />
        {data?.fundStatus === 2 && (
          <Featured>
            <FeatureTitle>ended!</FeatureTitle>
          </Featured>

        )}

        <StatusRibbon fundStatus={data?.fundStatus}>
          <Status>
            {data?.fundStatus === 1 ? "Funding is Alive" : "Funding has ended"}
          </Status>

        </StatusRibbon>


      </CardMedia>

      <CardBody>
        <CardTitle>
          <h5>{data?.projectTitle}</h5>
        </CardTitle>
        {!isHovered && (
          <MetaInfo animate={animeMeta}>
            <Author>
              <Avatar>
                <img src={data?.projectImage}></img>
              </Avatar>

              <Info><span>Creator</span>
                <h4>{data?.creatorName}</h4></Info>
            </Author>
            <PriceInfo>
              <span>Funds Required</span>


              <Price>
                <PriceText>{data?.fundsRequired}</PriceText>
              </Price>
            </PriceInfo>


          </MetaInfo>)}
        <TagsCta anime={animeMetaList}>
          <Tags>
            <span>milestone</span>
          </Tags>

          <CtaGrp>
            <CtaLink href="/">Contract</CtaLink>
            <CtaLink href="/">Escrow</CtaLink>
          </CtaGrp>
        </TagsCta>
        <MetaList animate={animeMetaList}>
          <MetaListItem>
            <div>Funds Required</div>
            <div>{data?.metaList?.fund_1}</div>
          </MetaListItem>
          <MetaListItem>
            <div>Funds Raised</div>
            <div>{data?.metaList?.fund_2}</div>
          </MetaListItem>
          {/* <MetaListItem>
        <div>Soft Cap</div>
        <div>{data?.metaList?.sort_cap}</div>
        </MetaListItem> */}
          <MetaListItem>
            <div>Investors</div>
            <div>{data?.metaList?.investor_count}</div>
          </MetaListItem>
          <MetaListItem>
            <div>Duration: <Timer/></div>
          </MetaListItem>
          <MetaListItem>
          </MetaListItem>
          <Link style={{ textDecoration: 'none' }} to={"/project" + data?.id}>
            {/* {data?.fundStatus === 1 ? "Funding is Alive" : "Funding has ended"} */}
            <Button>
              Find Out More
            </Button>
          </Link>
        </MetaList>
        {/* <a href="https://github.com/tzw0/shoppeth/blob/master/src/components/topbar/Topbar.jsx">wtf</a> */}
        {/* <Link to="/detail">
          <button>
              Find Out More
          </button>
            </Link> */}

      </CardBody>


    </Card>

  )
}

const Button = styled.button`
display: flex;
justify-content: center;
width: 100%;
padding: 15px;
color: white;
background-color: #4717F6;
background-image: linear-gradient(180deg, #4717F6 0%, #A2396A 80%);
border: none;
cursor: pointer;
font-weight: bold;
border-radius: 8px;
font-size: large;
margin-top: -20px;
`;

export default ProjectCard;