import React from 'react';
import style from './BidCard.module.css';

const BidCard = () => {
	return (
		<div className={style.BidCardWrapper}>
			<div className={style.BidCardContent}>
				<div className={style.BidCardIcon} />

				<span className={style.BidderWalletAddress}>
					wallet address
				</span>

				<div className={style.BidAmountDetails}>
					<div className={style.BidAmountWrapper}>
						<span>
							Bid:
						</span>

						<span className={style.BidAmount}>
							30.8ETH
						</span>

						<span className={style.BidAmount}>
							$35000
						</span>
					</div>
				</div>
			</div>

			<span className={style.BidTime}>
				Oct, 1. 2022. 5:12PM
			</span>
		</div>
	)
}

export default BidCard;