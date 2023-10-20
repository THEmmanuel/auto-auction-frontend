import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import style from './Listings.module.css';
import ListCard from '../../components/ListCard/ListCard';
import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner';

const API_URL = process.env.REACT_APP_BACKEND_API


const Listings = (props) => {
	const { category } = useParams();
	const [auctions, setAuctions] = useState([]);
	const [loading, setLoading] = useState(true);

	const getAuctions = () => {
		axios
			.get(`${API_URL}/auctions`)
			.then((res) => {
				const auctionList = res.data;
				const carDataPromises = auctionList.map((auction) =>
					axios.get(`${API_URL}/cars/${auction.car}`)
				);

				Promise.all(carDataPromises)
					.then((carData) => {
						const combinedData = auctionList.map((auction, index) => ({
							...auction,
							carData: carData[index].data,
						}));

						// Filter auctions based on the category if it's not "all"
						const filteredAuctions =
							category === 'all'
								? combinedData
								: combinedData.filter(
									(auction) => auction.carData.bodyType === category
								);

						setAuctions(filteredAuctions);
						setLoading(false);
					})
					.catch((error) => {
						setLoading(false);
					});
			})
			.catch((error) => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getAuctions();
	}, [category]); // Re-run the effect when the category changes

	return (
		<section>
			<section className={style.ListingsWrapper}>
				{loading ? (
					<p>Loading...</p>
				) : auctions.length === 0 ? (
					<p>No auctions available for the selected category.</p>
				) : (
					auctions.map((auction) => (
						<Link to={`/auction/${auction._id}`}>
							<ListCard
								make={auction.carData.make}
								model={auction.carData.model}
								engine={auction.carData.engine}
								transmission={auction.carData.transmission}
								price={auction.initialPrice}
								time={auction.auctionDuration}
								image={auction.carData.imageURL}
								year={auction.carData.year}
							/>
						</Link>
					))
				)}
			</section>
		</section>
	);
};



export default Listings;