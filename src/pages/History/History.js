import React, { useState, useEffect } from 'react';
import style from './History.module.css';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import axios from 'axios';
import { useAccount } from 'wagmi';
import toast, { toastConfig } from 'react-simple-toasts';
import { Link } from 'react-router-dom';

import NFT from '../../utils/NFT.json'

const ethers = require("ethers")
const API_URL = process.env.REACT_APP_BACKEND_API
toastConfig({ theme: 'dark' });


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
						<TransactionCard
							auction={auction}
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