import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import style from './AuctionSucess.module.css';
import porsche from '../../assets/testPorsche.svg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const API_URL = 'http://localhost:8080'


const AuctionSuccess = () => {
	const [auctionData, setAuctionData] = useState(null);
	const [carData, setCarData] = useState(null);
	const { carId, auctionId } = useParams();

	const getCar = () => {
		axios.get(`${API_URL}/cars/${carId}`).then((res) => setCarData(res.data));
	};

	const getAuction = () => {
		axios.get(`${API_URL}/auctions/${auctionId}`).then((res) => setAuctionData(res.data));
	};

	useEffect(() => {
		getAuction();
		getCar();
	}, []);

	return (
		<section className={style.AuctionSuccessWrapper}>
			{carData && auctionData ? (
				<div>
					<div className={style.AuctionCarInfoWrapper}>
						<span className={style.AuctionHeading}>
							Awesome you just listed your {`${carData.year} ${carData.make} ${carData.model}`} for sale
						</span>
						<img src={carData.imageURL} alt="" className={style.AuctionCarImage} />
					</div>

					<div className={style.AuctionPriceWrapper}>
						<span className={style.AuctionPriceText}>Price</span>
						<span className={style.AuctionPrice}>
							${auctionData.initialPrice}
						</span>
					</div>

					<span className={style.AuctionText}>
						Your Car is listed. Our team will reach out via email for inspection, your NFT is ready to be minted. 'Click on MINT NFT' in the history section to mint.
					</span>

					<div className={style.AuctionButtons}>
						<Link to="/history">
							<PrimaryButton text="View History" width={150} />
						</Link>

						<Link to="/">
							<PrimaryButton text="Go Home" width={150} />
						</Link>
					</div>
				</div>
			) : (
				<p>Loading car and auction data...</p>
			)}
		</section>
	);
};


export default AuctionSuccess;