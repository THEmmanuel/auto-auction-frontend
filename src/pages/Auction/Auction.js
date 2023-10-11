import React from 'react';
import style from './Auction.module.css';
import BidCard from '../../components/BidCard/BidCard';
import TimeIcon from '../../assets/timerIcon.svg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';


const Auction = props => {
	return (
		<section className={style.AuctionWrapper}>
			<div>
				<div>
					<span>Car name</span>
					image component
				</div>

				<div>
					<span>Highest bid</span>
					<div>
						<span>30.8ETH</span>
						<span>Price in $</span>
					</div>

					<div>
						<img src={TimeIcon} alt="" />
						<span>Bid Time Left</span>
						<span>Time</span>
					</div>

					<div>
						<PrimaryButton
							text='Place Bid'
							width={150}
						/>

						<PrimaryButton
							text='Contact Seller'
							width={150}
						/>
					</div>
				</div>

				<div>
					<span>10 bids</span>
					<BidCard />
					<BidCard />
					<BidCard />
					<BidCard />
					<BidCard />
					<BidCard />
					<BidCard />
					<BidCard />
					<BidCard />
				</div>
			</div>

			<div>
				<div>
					CarStats
				</div>

				<div>
					<span>
						About this car
					</span>

					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus recusandae ipsum ut necessitatibus eum repellat dolor minima, nulla dolorum corrupti voluptatem. Accusamus commodi, placeat ea autem voluptatem ratione maiores!
					</span>
				</div>
			</div>
		</section>
	)
}

export default Auction;