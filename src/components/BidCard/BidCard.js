import React from 'react';
import style from './BidCard.module.css';

const BidCard = props => {
	return (
		<div className={style.BidCardWrapper}>
			<div className={style.BidCardContent}>
				<div className={style.BidCardIcon} />

				<span className={style.BidderWalletAddress}>
					{props.bidder}
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
							{props.bidAmount}
						</span>
					</div>
				</div>
			</div>

			<span className={style.BidTime}>
				{props.bidTimeStamp}
			</span>
		</div>
	)
}

export default BidCard;