import React, { useState, useEffect } from 'react';
import style from './History.module.css';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import axios from 'axios';
import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';

import NFT from '../../utils/NFT.json'


const ethers = require("ethers")
const API_URL = process.env.REACT_APP_BACKEND_API


const History = (props) => {
	const [auctions, setAuctions] = useState(null); // Initial state is set to null
	const { address, isDisconnected } = useAccount();

	const getAuctions = () => {
		axios
			.get(`${API_URL}/auctions/creator/${address}`)
			.then((res) => {
				const auctionList = res.data;
				const carDataPromises = auctionList.map((auction) =>
					axios.get(`${API_URL}/cars/${auction.car}`)
				);

				Promise.all(carDataPromises)
					.then((carData) => {
						const combinedData = auctionList.map((auction, index) => ({
							...auction,
							carData: carData[index].data,
						}));
						setAuctions(combinedData);
					})
					.catch((error) => {
						// Handle errors in fetching car data
					});
			})
			.catch((error) => {
				// Handle errors in fetching auctions
			});
	};


	const askContractToMintNft = async () => {
		const CONTRACT_ADDRESS = "0x1cC88cEd7554Fdf7160E97e6a31c9CF2FC222436";

		try {
			const { ethereum } = window;
			if (ethereum) {
				const provider = new ethers.BrowserProvider(window.ethereum);
				const signer = await provider.getSigner();
				const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, NFT.abi, signer);

				console.log('Gonna pop wallet now to pay gas...');
				let nftTxn = await connectedContract.makeNFTStuff();

				console.log('Mining... please wait.');
				await nftTxn.wait();

				console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

			} else {
				console.log('Ethereum object does not exist');
			}

		} catch (error) {
			console.log(error);
		};

	};

	useEffect(() => {
		getAuctions();
	}, []);

	return (
		<section>
			<div className={style.TransactionCardWrapper}>
				{isDisconnected ? (
					// When the user's wallet is disconnected
					<p>Your wallet is disconnected. Please connect your wallet to view auctions.</p>
				) : auctions === null ? (
					// When data is still loading
					<p>Loading...</p>
				) : auctions.length > 0 ? (
					// When data is available
					auctions.map((auction) => (
						<TransactionCard auction={auction}
							mintNFT={askContractToMintNft}
						/>
					))
				) : (
					// When there is no data
					<p>No auctions to display.</p>
				)}
			</div>
		</section>
	);
};

export default History;