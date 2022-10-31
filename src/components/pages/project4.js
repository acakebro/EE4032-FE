import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "@fontsource/sora"
import { ethers } from "ethers";
import { abi } from "abi";
// import Image from "next/image";
let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();

<<<<<<< Updated upstream

export default function Project1() {
=======
export default function Project3() {
>>>>>>> Stashed changes
	// Read Data from smart contract

	// 1. Contract address

	const contractAddress = "0x3c725134d74D5c45B4E4ABd2e5e2a109b5541288";

	// 2. Contract ABI
	const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "campaignTitle",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "requiredCampaignAmount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "imgURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "storyURI",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "campaignOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "donar",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "donated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "donate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "image",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "receivedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requiredAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "story",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "title",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
	// 3. Provider

	const [inAmount, setinAmount] = useState();
	const [change, setChange] = useState(false);
	const [mydonations, setMydonations] = useState([]);
	const [outAmount, setoutAmount] = useState();
	const [walletAddress, setwalletAddress] = useState();

	

	const DonateFunds = async () => {
		try {
			await window.ethereum.request({ method: "eth_requestAccounts" });
			// const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();

			const contract = new ethers.Contract(contractAddress, abi, signer);

			const transaction = await contract.donate({
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

	return (
		<DetailWrapper>
			<LeftContainer>
				<ImageSection>
					<img
						layout="fill"
						src="https://cdn.dribbble.com/users/68544/screenshots/16605661/media/44cad084e28d0990c71953df0540b466.png?compress=1&resize=400x300"
						height="300px" />
				</ImageSection>
				<Text>
					Most logistics companies today offer only the location details of main locations like collection centre, city hubs and sorting facilities. 
					The exact live location details are never known, and if the system fails, the entire data is lost.
          Using blockchain, our projects implements a system to collect location data from many interconnected systems and deliver exact location details to the customers.
					 The application of this project can be extended to other areas like airlines to find lost baggage, car rentals for tracking rented car etc.
				</Text>
			</LeftContainer>
			<RightContainer>
				<Title>Project 4</Title>
				<DonateSection>
					<Input
						value={inAmount}
						onChange={(e) => setinAmount(e.target.value)}
						type="number"
						placeholder="Enter Amount:"
					/>
					<Donate onClick={DonateFunds}>Donate</Donate>
				</DonateSection>
				{/* <CollectSection>
					<Input
						value={outAmount}
						onChange={(e) => setoutAmount(e.target.value)}
						type="number"
						placeholder="Enter Amount:"
					/>
					<Collect>Collect</Collect>
				</CollectSection> */}
				<Container>
					<Details>
						<FundsData>
							<Funds>
								<FundText>Target Amount</FundText>
								<FundText>10 ETH</FundText>
							</Funds>
							<Funds>
								<FundText>Funds Raised</FundText>
								<FundText>5 ETH </FundText>
							</Funds>
							<Funds>
								<FundText>Target Percentage Return</FundText>
								<FundText>30%</FundText>
							</Funds>
							<Funds>
								<FundText>Percentage Ownership</FundText>
								<FundText>20%</FundText>
							</Funds>
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
						<a target = "/" href="https://goerli.etherscan.io/address/0x3c725134d74D5c45B4E4ABd2e5e2a109b5541288">

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
<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes
