import React from 'react';
import style from './TransactionCard.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';


const TransactionCard = ({ auction, mintNFT, nftStatus }) => {
	let button; // declare a variable
	if (nftStatus === "not minted") { // check the condition
		button = <PrimaryButton // assign the component to the variable
			text={'Mint NFT'}
			width={100}
			click={() => mintNFT()}
		/>;
	}
	if (nftStatus === 'minting') {
		button = <span>Minting</span>;
	}

	if (nftStatus === 'minted') {
		button = <span>Minted</span>;
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