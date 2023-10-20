import React from 'react';
import { Link } from 'react-router-dom'

import style from './Home.module.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import carCategories from '../../data/carCategories';
import Input from '../../components/Input/Input';
import searchIcon from '../../assets/searchIcon.svg'


const Home = () => {
	return (
		<section className={style.Home}>
			<div className={style.HomeText}>
				<span className={style.HomeIntroText}>
					Auto Auction
				</span>

				<span className={style.HomeIntroDescription}>
					List. Auction. Acquire
				</span>
			</div>

			{/* <div className={style.SearchWrapper}>
				<Input
					width={460}
					placeholder='What are you looking to buy. eg Porsche 911, Toyota Supra, Tesla etc'
				/>

				<button
					className={style.SearchButton}>
					<img src={searchIcon} alt="" />
				</button>
			</div> */}

			<section className={style.CategoriesWrapper}>
				{
					carCategories.map(category =>
						<Link to={`/listings/${category.categoryName}`}>
							<CategoryCard
								image={category.categoryImage}
								name={category.categoryName}
								description={category.categoryDescription}
								color={category.categoryColor}
							/>
						</Link>
					)
				}
			</section>
		</section>
	)
}

export default Home;