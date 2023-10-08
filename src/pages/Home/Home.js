import React from 'react';
import style from './Home.module.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import carCategories from '../../data/carCategories';

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
				{
					carCategories.map(category =>
						<CategoryCard
							image={category.categoryImage}
							name={category.categoryName}
							description={category.categoryDescription}
							color={category.categoryColor}
						/>)
				}
			</section>
		</section>
	)
}

export default Home;