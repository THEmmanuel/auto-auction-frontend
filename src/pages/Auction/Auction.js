import React from 'react';
import style from './Auction.module.css';
import BidCard from '../../components/BidCard/BidCard';
import TimeIcon from '../../assets/timerIcon.svg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import testPorsche from '../../assets/testPorsche.svg'
import CarStats from '../../components/CarStats/CarStats';


const Auction = props => {
	return (
		<section className={style.AuctionWrapper}>
			<div className={style.Auction}>
				<div className={style.CarInfo}>
					<span className={style.CarName}>
						Porsche 911
					</span>
					<img src={testPorsche} alt="" />
				</div>

				<div className={style.CarPrice}>
					<div className={style.BidDetails}>
						<span className={style.BidText}>
							Highest bid
						</span>
						<div className={style.BidPriceWrapper}>
							<span className={style.BidPriceETH}>
								30.8ETH
							</span>

							<span className={style.BidPriceDollars}>
								$427000
							</span>
						</div>

						<div className={style.BidTimeWrapper}>
							<img
								src={TimeIcon}
								alt=""
								className={style.TimeIcon}
							/>
							<div className={style.BidTimeContainer}>
								<span
									className={style.BidTimeText}>
									Bid Time Left:
								</span>

								<span
									className={style.BidTime}>
									21:01:44
								</span>
							</div>
						</div>
					</div>

					<div className={style.AuctionButtons}>
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

				<div className={style.BidContentWrapper}>
					<span className={style.BidNumber}>
						10 bids
					</span>

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

			<div className={style.CarDetails}>
				<div>
					<CarStats />
				</div>

				<div className={style.CarDetailsTextWrapper}>
					<span className={style.CarDetailsTextTitle}>
						About this car
					</span>

					<span className={style.CarDetailsText}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus recusandae ipsum ut necessitatibus eum repellat dolor minima, nulla dolorum corrupti voluptatem. Accusamus commodi, placeat ea autem voluptatem ratione maiores!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus recusandae ipsum ut necessitatibus eum repellat dolor minima, nulla dolorum corrupti voluptatem. Accusamus commodi, placeat ea autem voluptatem ratione maiores nulla dolorum corrupti voluptatem. Accusamus commodi, placeat ea autem voluptatem ratione maiores! placeat ea autem voluptatem ratione maiores!
					</span>
				</div>
			</div>
		</section>
	)
}

export default Auction;