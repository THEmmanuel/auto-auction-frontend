import React from 'react';
import style from './TransactionCard.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';


const TransactionCard = () => {
	return (
		<div className={style.TransactionCard}>
			<div className={style.TransactionDetails}>
				<span>#QTE6373t6eWrTywqA</span>
				<span>2020 Ferrari 488 Pista</span>

				<span className={style.TransactionStatus}>
					status
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