// import React from 'react'
// import "./Modal.css";
// import styled from "styled-components";
// import { ProjectData } from '../ProjectData'; 
// import { loadRemoteVersion } from 'solc';


// function Modal({data,close}) {
  

//   return (
//     <div  id="modal" className='modal' onClick={(e) => e.stopPropagation()} key={data?.id}>
//       <img className='modal__image' alt="/" src={data?.projectImage}/>
//       <div className='modal__info'>
//         <div className='modal__row'>
//           <span className='modal__price'>{data?.fundsRequired}</span>
//         </div>
//         <div className='modal__row'>
//           <span className='modal__address'>{data?.projectTitle}</span>
//         </div>
//         <div className='modal__description-wrapper'>
//           <p className='modal__description'>{data?.description}</p>
//         </div>
//       </div>
//       <button className='modal__close-wrapper' onClick={close}>
//         <i className="fa-solid fa-x modal__close-icon"></i>
//       </button>
//       </div>
    
//   )
// }



// export default Modal;

// return (
//     <>
//     <Section id="projects">
//       <Title>Latest Projects</Title>
   
//       <ProjectContainer>
//         {ProjectData?.map((item) => {
//           return (
//             <>
//             <ProjectCard data={item} open={openModal}/>
//             {open && 
//             (<Overlay close={closeModal}>
//               {<Modal data={item} close={closeModal}/>}
//               </Overlay> )}
//             </>
//             )
//           })}
//       </ProjectContainer>
//           </Section>
//           </>
//   )



// {
//   id: 2,
//   projectStatus: "Funding Ended",
//   projectTitle: "Project2",
//   projectImage: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg",
//   creatorName: "Bryan",
//   fundsRequired: "50 ETH",
//   fundStatus:2,
//   metaList: {
//     fund_1: "10 ETH",
//     fund_2: "300 ETH",
//     investor_count:12,
//   },

// },



// const DetailWrapper = styled.div`
// display: flex;
// justify-content: space-between;
// padding: 20px;
// width: 98%;
// `;

// const LeftContainer = styled.div`
// width: 45%;
// `;

// const RightContainer = styled.div`
// width: 50%;
// `;

// const ImageSection = styled.div`
// width: 100%;
// position: relative;
// height: 350px;
// `;

// const Text = styled.p`
// font-family: "Roboto";
// font-size: large;
// color: #fff;
// text-align: justify;
// `;
// const Title = styled.h1`
// padding: 0;
// margin: 0;
// font-family: "Poppins";
// font-size: x-large;
// color: #fff;
// `;

// const DonateSection = styled.div`
// display: flex;
// width: 100%;
// justify-content: space-between;
// align-items: center;
// margin-top: 10px;
// `;

// const Input = styled.input`
// padding: 8px 15px;
// background-color: #202020;
// color: #fff;
// border: none;
// border-radius: 8px;
// outline: none;
// font-size: large;
// width: 40%;
// height: 40px;
// `;

// const Donate = styled.button`
// display: flex;
// justify-content: center;
// width: 40%;
// padding: 15px;
// color: white;
// background-color: #00b712;
// background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
// border: none;
// cursor: pointer;
// font-weight: bold;
// border-radius: 8px;
// font-size: large;
// `;

// const FundsData = styled.div`
// width: 100%:
// display: flex;
// justify-content: space-between;
// margin-top: 10px;
// `;

// const Funds = styled.div`
// width: 45%;
// background-color: #202020;
// padding: 8px;
// borde-radius: 8px;
// tetx-align: center;
// `;

// const FundText = styled.p`
// margin: 2px;
// padding: 0;
// font-family: "Poppins";
// font-size: normal;
// `;

// const Donated = styled.div`
// height: 280px;
// margin-top: 15px;
// background-color: #202020;
// `;

// const LiveDonation = styled.div`
// height: 65%;
// overflow-y: auto;
// `;

// const DonationTitle = styled.div`
// font-family: "Roboto";
// font-size: x-small;
// text-transform: uppercase;
// padding: 4px;
// text-align: center;
// background-color: #4cd137;
// `;

// const Donation = styled.div`
// display: flex;
// justify-content: space-between;
// margin-top: 4px;
// background-color: #202020;
// padding: 4px 8px;
// `;

// const DonationData = styled.p`
// color: #202020;
// font-family: "Roboto";
// font-size: large;
// margin: 0;
// padding: 0;
// `;

