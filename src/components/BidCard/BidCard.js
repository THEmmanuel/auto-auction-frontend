import React from 'react';
import style from './BidCard.module.css';
import formatDate from '../../utils/formatDate';


// const formatWalletAddress = (address) => {
//   if (address.length < 8) return address; // If the address is too short, return it as it is
//   const start = address.slice(0, 6);
//   const end = address.slice(-6);
//   return `${start}...${end}`;
// };

const BidCard = props => {
	// const formattedBidder = formatWalletAddress(props.bidder);
	return (
		<div className={style.BidCardWrapper}>
			<div className={style.BidCardContent}>
				<div className={style.BidCardIcon} />

				<span className={style.BidderWalletAddress}>
					{/* {formattedBidder} */}
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
				{formatDate(props.bidTimeStamp)}
			</span>
		</div>
	)
}

export default BidCard;