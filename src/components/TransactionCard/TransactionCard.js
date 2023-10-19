import React from 'react';
import style from './TransactionCard.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';


const TransactionCard = ({auction}) => {
	return (
		<div className={style.TransactionCard}>
			<div className={style.TransactionDetails}>
				<span>{auction._id}</span>
				<span>{`${auction.carData.year} ${auction.carData.make} ${auction.carData.model}`}</span>

				<span className={style.TransactionStatus}>
					{auction.status}
				</span>
			</div>

			<PrimaryButton
				text='Mint NFT'
				width={100}
			/>
		</div>
	)
}

export default TransactionCard;