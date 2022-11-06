import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@fontsource/sora"
import { ethers } from "ethers";
let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();


export default function Project2() {
	// Read Data from smart contract

	// 1. Contract address

	const contractAddress = "0xd036DE4a24E86c517654c60Ee5bf72d6f50Fce0E";

	// 2. Contract ABI
	const abi = [{"inputs":[{"internalType":"uint256","name":"_minDeposit","type":"uint256"},{"internalType":"uint256","name":"_minDividend","type":"uint256"},{"internalType":"uint256","name":"_minPledgeAmt","type":"uint256"},{"internalType":"uint256","name":"_minDuration","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Cancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"goal","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startAt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endAt","type":"uint256"}],"name":"Launch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Pledge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unpledge","type":"event"},{"inputs":[],"name":"MINDEPOSIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINDIVIDEND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINDURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINPLEDGEAMT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"campaigns","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"goal","type":"uint256"},{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint256","name":"pledged","type":"uint256"},{"internalType":"uint256","name":"startAt","type":"uint256"},{"internalType":"uint256","name":"endAt","type":"uint256"},{"internalType":"enum QuickStart.Status","name":"status","type":"uint8"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"cancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creatorExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creators","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"goal","type":"uint256"},{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint256","name":"pledged","type":"uint256"},{"internalType":"uint256","name":"startAt","type":"uint256"},{"internalType":"uint256","name":"endAt","type":"uint256"},{"internalType":"enum QuickStart.Status","name":"status","type":"uint8"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creatorsDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_goal","type":"uint256"},{"internalType":"uint256","name":"_startAt","type":"uint256"},{"internalType":"uint256","name":"_endAt","type":"uint256"}],"name":"launch","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"pledge","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pledgedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unpledge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
	// 3. Provider

	const [inAmount, setinAmount] = useState();
	const [change, setChange] = useState(false);
	const [mydonations, setMydonations] = useState([]);
	const [outAmount, setoutAmount] = useState();
	const [walletAddress, setwalletAddress] = useState();
	const [balance, setbalance] = useState();


	const readDataFromSmartContract = async () => {

    const contract = new ethers.Contract(contractAddress, abi, signer);
    const balance =  await contract.getBalance();
		setbalance(balance/1e18);
    }


	const DonateFunds = async () => {
		try {
			await window.ethereum.request({ method: "eth_requestAccounts" });
			// const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();

			const contract = new ethers.Contract(contractAddress, abi, signer);

			const transaction = await contract.pledge(0, {
				value: ethers.utils.parseEther(inAmount)
			});

			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setwalletAddress(accounts[0]);
			await transaction.wait();

			setChange(true);
			setinAmount("");

			// const info =  web3.eth.getTransactionReceipt(tx.result);           
			// console.log(info);
		} catch (error) {
			alert('Please key in a valid amount of ETH')
		}
	};

	// const ReturnFunds = async () => {
	// 	try {
	// 		await window.ethereum.request({ method: "eth_requestAccounts" });
	// 		// const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 		const signer = provider.getSigner();

	// 		const contract = new ethers.Contract(contractAddress, abi, signer);


	// 		// const transaction = await contract.unpledge(0, outAmount
	// 		// 	);

	// 		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     setwalletAddress(accounts[0]);
	// 		await transaction.wait();

	// 		setChange(true);
	// 		setinAmount("");

	// 		// const info =  web3.eth.getTransactionReceipt(tx.result);           
	// 		// console.log(info);
	// 	} catch (error) {
	// 		alert('U did not pledge a valid amount')
	// 	}
	// };



	return (
		<DetailWrapper>
			<LeftContainer>
				<ImageSection>
					<img
						layout="fill"
						src="https://st.depositphotos.com/3207681/4211/v/450/depositphotos_42114737-stock-illustration-fox-with-a-flamethrower-logo.jpg" height="300px"
						alt="project1placeholder" />
				</ImageSection>
				<Text>
					Most carpooling systems and radio cab facilities come with a middle man, the agency itself. So what if the agency like Uber decides to shut down business in the city? If ride-sharing and car hire are moved to the blockchain, without an intermediary, both riders and drivers can get connected directly. If the project is completed successfully, it can build a network that will provide safe, reliable transportation.

Presently, a single agency controls most carpooling systems. Our project is to build a reliable and secure carpooling system.
				</Text>
			</LeftContainer>
			<RightContainer>
				<Title>Project 2</Title>
				<DonateSection>
					<Input
						value={inAmount}
						onChange={(e) => setinAmount(e.target.value)}
						type="number"
						placeholder="Enter Amount:"
					/>
					<Donate onClick={()=> {
						DonateFunds(); 
					}}>Donate</Donate>
				</DonateSection>
				{/* <CollectSection>
					<Input
						value={outAmount}
						onChange={(e) => setoutAmount(e.target.value)}
						type="number"
						placeholder="Enter Amount:"
					/>
					<Collect onClick={() => {
						ReturnFunds();
					}}>Collect</Collect>
				</CollectSection> */}
				<Container>
					<Details>
						<FundsData>
							<Funds>
								<FundText>Target Amount</FundText>
								<FundText>50 ETH</FundText>
							</Funds>
							<Funds>
								<FundText>Funds Raised</FundText>
								<FundText>20 ETH </FundText>
							</Funds>
							<Funds>
								<FundText>Target Percentage Return</FundText>
								<FundText>30%</FundText>
							</Funds>
							{/* <Funds>
								<FundText>Percentage Ownership</FundText>
								<FundText>20%</FundText>
							</Funds> */}
						</FundsData>
						<HighestOwnershipData>
							<WhaleDetails>
								<Ownership>Top Donors:</Ownership>
								<Ownership>0xD180c50c5Fe07805eA7e1a339db8dFE24911710a</Ownership>
								<Ownership>3 ETH</Ownership>
							</WhaleDetails>
							<WhaleDetails>
								<Ownership>0xG9d0c503nd8s9aedfnnew8239db8dFE19f7sn21l</Ownership>
								<Ownership>2 ETH</Ownership>
							</WhaleDetails>
							<WhaleDetails>
								<Ownership>0xjnd8f9af317813db397fdbf9d7f24f42fbdfdf79</Ownership>
								<Ownership>1 ETH</Ownership>
							</WhaleDetails>
						</HighestOwnershipData>
					</Details>
				</Container>
				<Donated>
					<LiveDonation>
						<a target = "/" href="https://goerli.etherscan.io/address/0xd036DE4a24E86c517654c60Ee5bf72d6f50Fce0E">

						<DonationTitle>Click here to view recent transactions</DonationTitle>
						</a>
						{/* <Donation>
							<DonationData>0xf7233e2a224...Y31</DonationData>
							<DonationData>1.5 ETH</DonationData>
							<DonationData>6/03/2021, 9:11:03 AM</DonationData>
						</Donation> */}
					</LiveDonation>
				</Donated>
			</RightContainer>
		</DetailWrapper>
	);
}



const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-color: #0e0b16;
  // background-color: #A2396A;
  // background-color: #4717F6;
  // background-color: #E7DFDD;
`;

const Details = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  background-color: #0e0b16;
  
  // background-color: #A2396A;
  // background-color: #4717F6;
  // background-color: #E7DFDD;
`;

const LeftContainer = styled.div`
  width: 45%;
`;

const RightContainer = styled.div`
  width: 50%;
`;

const ImageSection = styled.div`
  width: 100%;
  position: relative;
  height: 350px;
  margin-left: 50px;
`;

const Text = styled.p`
  // font-family: "Roboto";
font-family: 'Sora';
  font-size: large;
  color: #e7dfdd;
  text-align: justify;
`;
const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: "Poppins";
  font-size: x-large;
  color: #e7dfdd;
`;

const DonateSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const CollectSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 8px 15px;
  background-color: #202020;
  color: #e7dfdd;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 40%;
  height: 40px;
`;

const Donate = styled.button`
  display: flex;
  justify-content: center;
  width: 40%;
  padding: 15px;
  color: white;
  background-color: #4717f6;
  background-image: linear-gradient(180deg, #4717f6 0%, #a2396a 80%);
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  font-size: large;
`;

const Collect = styled.button`
  display: flex;
  justify-content: center;
  width: 40%;
  padding: 15px;
  color: white;
  background-color: #4717f6;
  background-image: linear-gradient(180deg, #4717f6 0%, #a2396a 80%);
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  font-size: large;
`;

const Container = styled.div`
  display: grid;
`;

const FundsData = styled.div`
  width: 100%;
  padding: 0 1% 0 0;
  margin-top: 10px;
`;

const Funds = styled.div`
  width: 100%;
  background-color: #202020;
  padding: 8px;
`;

const FundText = styled.p`
  margin: 2px;
  padding: 0;
  font-family: 'Sora';
  font-size: normal;
`;

const HighestOwnershipData = styled.div`
  width: 100%;
  padding: 0 0 0 1%;
  margin-top: 10px;
`;

const WhaleDetails = styled.div`
  width: 100%;
  background-color: #202020;
  padding: 8px;
`;

const Ownership = styled.p`
  margin: 2px;
  padding: 0;
  font-family: 'Sora';
  font-size: normal;
`;

const Donated = styled.div`
  height: 160px;
  margin-top: 15px;
  background-color: #202020;
`;

const LiveDonation = styled.div`
  height: 65%;
  overflow-y: auto;
`;

const DonationTitle = styled.div`
  font-family: "Roboto";
  font-size: x-small;
  text-transform: uppercase;
  padding: 10px;
  text-align: center;
  background-color: #a2396a;
`;

const Donation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  background-color: #202020;
  padding: 4px 8px;
`;

const DonationData = styled.p`
  color: #e7dfdd;
  font-family: "Roboto";
  font-size: large;
  margin: 0;
  padding: 0;
`;


