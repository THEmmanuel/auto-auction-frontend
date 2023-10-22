import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './Auction.module.css';
import BidCard from '../../components/BidCard/BidCard';
import TimeIcon from '../../assets/timerIcon.svg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import testPorsche from '../../assets/testPorsche.svg'
import CarStats from '../../components/CarStats/CarStats';
import Input from '../../components/Input/Input';
import { useAccount } from 'wagmi';
import toast, { toastConfig } from 'react-simple-toasts';
import NFTAuction from '../../utils/NFTAuction.json';

const ethers = require("ethers")
const API_URL = process.env.REACT_APP_BACKEND_API
toastConfig({ theme: 'dark' });

const Auction = props => {
	const { id } = useParams();
	const { address, isDisconnected } = useAccount();

	const [auction, setAuction] = useState(null); // Initialize auction data as null
	const [loading, setIsLoading] = useState(true);
	const [showBidPlacer, setShowBidPlacer] = useState(false);
	const [bids, setBids] = useState(null);

	const [bid, setBid] = useState({
		car: '',
		auction: '',
		bidder: '',
		bidAmount: '',
		bidStatus: 'placed',
		bidTimeStamp: ''
	})
	const AUCTION_ADDRESS = '0x38e62DAfCB1ff52856AF2382E8f8B5cCE65D7316'
	const NFT_ADDRESS = "0x1cC88cEd7554Fdf7160E97e6a31c9CF2FC222436";

	const { ethereum } = window;

	// Function to find the bid with the highest bid amount
	const findHighestBid = () => {
		if (bids && bids.length > 0) {
			let highestBid = bids[0]; // Initialize with the first bid

			for (let i = 1; i < bids.length; i++) {
				if (bids[i].bidAmount > highestBid.bidAmount) {
					highestBid = bids[i]; // Update the highest bid if a higher bid is found
				}
			}

			return highestBid;
		}

		return null; // Return null if there are no bids or bids array is empty
	};

	// Call this function to get the highest bid
	const highestBid = findHighestBid();


	const currentDate = new Date();
	// Format the date to a string in ISO format (e.g., "2023-10-16T12:30:00.000Z")
	const formattedDate = currentDate.toISOString();

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

	// const addBidToAuction = () => {

	// }

	const placeBid = () => {
		const updatedBid = {
			...bid,
			bidAmount: bid.bidAmount,
			bidTimestamp: formattedDate, // Check if formattedDate is defined
		};

		// placeBidAuction(15)

		axios.post(`${API_URL}/bids`, updatedBid)
			.then((res) => {
				// Check if the request was successful
				if (res.status === 200 || res.status === 201) {
					// Display a success toast
					toast('Bid placed successfully');

					// Reload the page
					window.location.reload();
				}
			})
			.catch((error) => {
				// Handle errors here, if needed
				console.error('Error placing bid:', error);
				// Display an error toast
				toast('Failed to place the bid');
			});
	};

	// Set up the provider and the contract instance
	// const provider = new ethers.BrowserProvider(window.ethereum);
	// // Get the signer from the provider
	// const signer = provider.getSigner();



	// Call the startAuction function
	async function startAuction() {
		const provider = new ethers.BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();

		const auctionContract = new ethers.Contract(AUCTION_ADDRESS, NFTAuction.abi, signer)

		const tx = await auctionContract.startAuction();
		const receipt = await tx.wait();

		// Check the status of the transaction
		if (receipt.status === 1) {
			console.log("Auction started successfully");
		} else {
			console.log("Auction failed");
		}
	}

	async function placeBidAuction(amount) {
		if (ethereum) {
			const provider = new ethers.BrowserProvider(window.ethereum);
			const signer = await provider.getSigner();
			const auctionContract = new ethers.Contract(AUCTION_ADDRESS, NFTAuction.abi, signer)

			// Convert the amount to wei
			const weiAmount = ethers.utils.parseEther(amount);

			// Connect to the contract with the signer

			// Call the placeBid function and wait for the transaction to be mined
			const tx = await auctionContract.placeBid(weiAmount);
			const receipt = await tx.wait();

			// Check the status of the transaction
			if (receipt.status === 1) {
				console.log("Bid placed successfully");
			} else {
				console.log("Bid failed");
			}
		}
	}

	// Call the endAuction function
	async function endAuction() {
		const provider = new ethers.BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();
		const auctionContract = new ethers.Contract(AUCTION_ADDRESS, NFTAuction.abi, signer)
		// Connect to the contract with the signer
		// Call the endAuction function and wait for the transaction to be mined
		const tx = await auctionContract.endAuction();
		const receipt = await tx.wait();

		// Check the status of the transaction
		if (receipt.status === 1) {
			console.log("Auction ended successfully");
		} else {
			console.log("Auction failed");
		}
	}

	const toggleBidPlacer = () => {
		const updatedBid = {
			...bid,
			car: auction.car,
			auction: auction._id,
			bidder: address,
			bidStatus: 'placed',
			bidTimestamp: formattedDate, // Check if formattedDate is defined
		};

		console.log(updatedBid);

		setBid(updatedBid);
		setShowBidPlacer(!showBidPlacer);
	}

	// Add a function to compare two timestamps
	function compareTimestamps(bidA, bidB) {
		const timestampA = new Date(bidA.bidTimestamp);
		const timestampB = new Date(bidB.bidTimestamp);

		// Sort in descending order (most recent first)
		return timestampB - timestampA;
	}

	// Sort the bids by recency when they are available
	const sortedBids = bids
		? [...bids].sort(compareTimestamps)
		: null;


	const getBids = () => {
		axios.get(`${API_URL}/bids/auction/${id}`)
			.then((res) => {
				setBids(res.data);
			})
			.catch((error) => {
				console.error("Error fetching bids:", error);
				setBids([]); // Set bids to an empty array in case of an error
			});
	}



	const handleBidAmountChange = (e) => setBid({ ...bid, bidAmount: e.target.value });

	useEffect(() => {
		getAuction();
		getBids()
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
													{/* 30.8ETH */}
												</span>

												<span className={style.BidPriceDollars}>
													${auction.initialPrice}
												</span>
											</div>
										</div>

										<div>
											<span className={style.BidText}>
												Highest bid
											</span>
											<div className={style.BidPriceWrapper}>
												<span className={style.BidPriceETH}>
													{/* 30.8ETH */}
												</span>

												<span className={style.BidPriceDollars}>
													{highestBid ? `$${highestBid.bidAmount}` : 'No bids available'}
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
										text='Add Bid'
										width={150}
										click={() => toggleBidPlacer()}
									/>

									<PrimaryButton
										text='End Auction'
										width={150}
										// click={() => endAuction()}
										click={() => {
											// endAuction();
											window.location.reload();
										}}

									/>
								</div>

								{showBidPlacer ?
									<div className={style.BidPlacer}>
										{
											isDisconnected ?
												<span className={style.AuctionInfoText}>
													Connect wallet to place bid
												</span>
												:
												<><span className={style.BidText}>Place Bid</span><div className={style.BidPlaceInputs}>
													<Input
														width={360}
														label='Bid amount in $'
														placeholder='ex: 40000'
														change={handleBidAmountChange}
														value={bid.bidAmount} />

													<SecondaryButton
														text='Place your bid'
														width={150}
														click={() => placeBid()} />
												</div></>
										}
									</div>
									: null}
							</div>

							<div className={style.BidContentWrapper}>
								{sortedBids === null ? (
									<span>Loading...</span>
								) : sortedBids.length === 0 ? (
									<span className={style.AuctionInfoText}>
										No bids available.
									</span>
								) : (
									<div className={style.BidsWrapper}>
										<span className={style.BidNumber}>
											{sortedBids.length} bids
										</span>
										<div className={style.Bids}>
											{sortedBids.map((bid) => (
												<BidCard
													key={bid._id}
													bidder={bid.bidder}
													bidAmount={bid.bidAmount}
													bidTimeStamp={bid.bidTimestamp}
												/>
											))}
										</div>
									</div>
								)}
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
									nftHash={auction.hash}
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