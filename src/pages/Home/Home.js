import React from 'react';
import style from './Home.module.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Home = () => {
	return (
		<section>
			<div>
				<span>Auto Auction</span>
				<span>List. Auction. Acquire</span>
			</div>

			<div>
				<input type="text" />
				<button>search</button>
			</div>

			<section>
				<CategoryCard />
			</section>
		</section>
	)
}

export default Home;