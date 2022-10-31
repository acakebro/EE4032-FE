import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Home.css';
import styled from "styled-components";
import Navbar from './Navbar';
import { ethers } from "ethers";
import { motion } from 'framer-motion';


let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();

const Box = styled(motion.div)`
// width: 35vw;
// height: 100vh;
height: 500px;
border: 2px solid #fff;
border-radius: 15px;

`

const Text = styled(motion.div)`
// padding-bottom: 10px;
// padding: 2rem;
// width: 35vw;
// height: 40vh;
// border: 2px solid #fff
display: flex;
flex-direction: column;
justify-content: space-evenly;
line-height: 25px;
// align-items: center;
animation: typing 1s steps(20, end) forwards;
@keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
`


const Home = () => {

  // Connect Wallet

  const [walletAddress, setwalletAddress] = useState();
  const [balance, setbalance] = useState();
  const [network, setnetwork] = useState();

  const connectWallet = async () => {

    // Connect Wallet
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setwalletAddress(accounts[0]);

      const balance = await provider.getBalance(accounts[0]);
      setbalance(ethers.utils.formatEther(balance));

      const data = await provider.getNetwork(accounts[0]);
      setnetwork(data.name);
    }


  }







  return (
    <div className='hero-container' id="home">
      <video src="/EE4032-FE/video-2.mp4" autoPlay loop muted />
      <h1>QUICKSTART</h1>
      <p>What are you waiting for?</p>
      {!walletAddress && (<Button buttonStyle='btn--outline' buttonSize='btn--large' onClick={connectWallet}>
        Connect Wallet
      </Button>)}

      {/* 
      initial={{height:0}}
      animate={{height: '25vh'}}
      transition={{type:'spring', duration:2, delay:1}}
      
       */}

      {walletAddress &&
        (<>
          <Box
            initial={{ height: 0, margin: '30px' }}
            animate={{ height: '25vh', padding: '40px', margin: '30px' }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}

          >

            <Text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <div>Status : Connected</div>
              <div><i class="fa-solid fa-wallet"></i> : &nbsp;
                {walletAddress} </div>
              <div><i class="fa-brands fa-ethereum"></i> : &nbsp;
                {balance}
                {/* <i class="fa-brands fa-ethereum"></i> */}
              </div>
              <div><i class="fa-solid fa-wifi"></i> : &nbsp;
                {network}</div>
            </Text>
          </Box>

        </>)}






    </div>
  )
}

export default Home

