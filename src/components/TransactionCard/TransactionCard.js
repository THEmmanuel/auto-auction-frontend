import React, { useState } from 'react';
import axios from 'axios';
import style from './TransactionCard.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import toast, { toastConfig } from 'react-simple-toasts';
import NFT from '../../utils/NFT.json'



const ethers = require("ethers")
const API_URL = process.env.REACT_APP_BACKEND_API
toastConfig({ theme: 'dark' });



const TransactionCard = ({ auction }) => {
	const [mintState, setMintState] = useState('not minted')
	const [link, setLink] = useState('')

	const askContractToMintNft = async () => {

		const CONTRACT_ADDRESS = "0x1cC88cEd7554Fdf7160E97e6a31c9CF2FC222436";

		try {
			const { ethereum } = window;
			if (ethereum) {
				const provider = new ethers.BrowserProvider(window.ethereum);
				const signer = await provider.getSigner();
				const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, NFT.abi, signer);

				console.log('Gonna pop wallet now to pay gas...');
				toast('opening wallet');
				let nftTxn = await connectedContract.makeNFTStuff();

				console.log('Mining... please wait.');
				toast('minting NFT');
				setMintState('minting')
				await nftTxn.wait();

				toast(`Minted, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
				setMintState('minted')
				setLink(`https://goerli.etherscan.io/tx/${nftTxn.hash}`)

				// After the NFT is minted, make an Axios request to add hash to the auction
				const response = await axios.post(`${API_URL}/auctions/${auction._id}/add-hash`, { hash: nftTxn.hash });

				// Handle the response, e.g., you can log the response or take some action
				console.log('Added hash to the auction:', response.data);

			} else {
				toast('Ethereum object does not exist');
			}

		} catch (error) {
			console.log(error);
		};

	};

	let button; // declare a variable
	if (mintState === "not minted") { // check the condition
		button = <PrimaryButton // assign the component to the variable
			text={'Mint NFT'}
			width={100}
			click={() => askContractToMintNft()}
		/>;
	}
	if (mintState === 'minting') {
		button = <span>Minting</span>;
	}

	if (mintState === 'minted') {
		button = <a href={link} target='blank'>Minted, view on etherscan</a>;
	}
	return (
		<div className={style.TransactionCard}>
			<div className={style.TransactionDetails}>
				<span>{auction._id}</span>
				<span>{`${auction.carData.year} ${auction.carData.make} ${auction.carData.model}`}</span>

				<span className={style.TransactionStatus}>
					{auction.status}
				</span>
			</div>

			{button}
		</div>
	)
}

export default TransactionCard;