import React from 'react';
import style from './AuctionSucess.module.css';
import porsche from '../../assets/testPorsche.svg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const AuctionSucess = () => {
	return (
		<section className={style.AuctionSuccessWrapper}>
			<div className={style.AuctionCarInfoWrapper}>
				<span>Awesome you just listed your [car] for sale</span>
				<img
					src={porsche}
					alt=""
					className={style.AuctionCarImage}
				/>
			</div>

			<div className={style.AuctionPriceWrapper}>
				<span className={style.AuctionPriceText}>
					Reserve Price
				</span>

				<span className={style.AuctionPrice}>
					$35000
				</span>
			</div>

			<span className={style.AuctionText}>
				Our team will reach out via email for inspection and your NFT will be minted as soon as we approve your auction. You can check on it any time in the history section.
			</span>

			<div className={style.AuctionButtons}>
				<PrimaryButton
					text='View History'
					width={150}
				/>

				<PrimaryButton
					text='Go Home'
					width={150}
				/>
			</div>
		</section>
	)
}

export default AuctionSucess;