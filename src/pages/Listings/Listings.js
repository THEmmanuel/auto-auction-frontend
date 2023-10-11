import React from 'react';
import style from './Listings.module.css';
import ListCard from '../../components/ListCard/ListCard';
import { Link } from 'react-router-dom';

const Listings = props => {
	return (
		<section>
			<section className={style.ListingsWrapper}>
				<ListCard />
				<ListCard />
				<ListCard />
				<ListCard />
				<ListCard />
				<ListCard />
				<ListCard />
			</section>
		</section>
	)
}

export default Listings;