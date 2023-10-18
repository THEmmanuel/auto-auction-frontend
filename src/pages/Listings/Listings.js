import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Listings.module.css';
import ListCard from '../../components/ListCard/ListCard';
import { Link } from 'react-router-dom';


const API_URL = 'http://localhost:8080'


const Listings = props => {
	const [auctions, setAuctions] = useState([])

	const getAuctions = () => {
		axios.get(`${API_URL}/auctions`)
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
						setAuctions(combinedData);
					})
					.catch((error) => {
						// Handle errors in fetching car data
					});
			})
			.catch((error) => {
				// Handle errors in fetching auctions
			});
	};


	console.log(auctions);

	useEffect(() => {
		getAuctions()
	}, [])

	return (
		<section>
			<section className={style.ListingsWrapper}>
				{
					auctions.map((auction) =>
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
					)
				}


			</section>
		</section>
	)
}

export default Listings;