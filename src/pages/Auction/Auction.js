import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './Auction.module.css';
import BidCard from '../../components/BidCard/BidCard';
import TimeIcon from '../../assets/timerIcon.svg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import testPorsche from '../../assets/testPorsche.svg'
import CarStats from '../../components/CarStats/CarStats';

const API_URL = 'http://localhost:8080'

const Auction = props => {
	const { id } = useParams();
	const [auction, setAuction] = useState(null); // Initialize auction data as null
	const [loading, setIsLoading] = useState(true);

	const getAuction = () => {
		setIsLoading(true); // Set loading to true when fetching data
		axios.get(`${API_URL}/auctions/${id}`)
			.then((res) => {
				const auction = res.data;
				axios.get(`${API_URL}/cars/${auction.car}`)
					.then((carRes) => {
						const combinedData = {
							...auction,
							carData: carRes.data,
						};
						setAuction(combinedData);
						setIsLoading(false); // Set loading to false when data is ready
					})
					.catch((carError) => {
						setIsLoading(false); // Set loading to false on error
						// Handle errors in fetching car data
					});
			})
			.catch((error) => {
				setIsLoading(false); // Set loading to false on error
				// Handle errors in fetching the specific auction
			});
	};

	useEffect(() => {
		getAuction();
	}, [id]);

	return (
		<section>
			{
				loading ? (
					<p>loading</p>
				) : (
					<div className={style.AuctionWrapper}>
						<div className={style.Auction}>
							<div className={style.CarInfo}>
								<span className={style.CarName}>
									{`${auction.carData.year} ${auction.carData.make} ${auction.carData.model}`}
								</span>
								<img src={auction.carData.imageURL} alt="" />
							</div>

							<div className={style.CarPrice}>
								<div className={style.BidDetails}>
									<div>
										<div>
											<span className={style.BidText}>
												Initial price
											</span>
											<div className={style.BidPriceWrapper}>
												<span className={style.BidPriceETH}>
													30.8ETH
												</span>

												<span className={style.BidPriceDollars}>
													$427000
												</span>
											</div>
										</div>

										<div>
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
										</div>
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
								<CarStats
									make={auction.carData.make}
									model={auction.carData.model}
									VIN={auction.carData.VIN}
									engine={auction.carData.engine}
									mileage={auction.carData.mileage}
									bodyType={auction.carData.bodyType}
									transmission={auction.carData.transmission}
									drivetrain={auction.carData.drivetrain}
									horsepower={auction.carData.horsepower}
									ownerWallet={auction.carData.ownerWalletAddress}
									exteriorColor={auction.carData.exteriorColor}
									interiorColor={auction.carData.interiorColor}
									sellerType={auction.carData.sellerType}
								/>
							</div>

							<div className={style.CarDetailsTextWrapper}>
								<span className={style.CarDetailsTextTitle}>
									About this car
								</span>

								<span className={style.CarDetailsText}>
									{auction.carData.description}
								</span>
							</div>
						</div>
					</div>
				)
			}
		</section>
	)
}

export default Auction;