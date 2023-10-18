import React from 'react';
import { Link } from 'react-router-dom';
import style from './AuctionSucess.module.css';
import porsche from '../../assets/testPorsche.svg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const AuctionSucess = () => {
	return (
		<section className={style.AuctionSuccessWrapper}>
			<div className={style.AuctionCarInfoWrapper}>
				<span className={style.AuctionHeading}>
					Awesome you just listed your [car] for sale
				</span>
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
				<Link to='/history'>
					<PrimaryButton
						text='View History'
						width={150}
					/>
				</Link>

				<Link to='/'>
					<PrimaryButton
						text='Go Home'
						width={150}
					/>
				</Link>

			</div>
		</section>
	)
}

export default AuctionSucess;