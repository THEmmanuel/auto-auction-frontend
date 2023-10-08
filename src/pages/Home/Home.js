import React from 'react';
import style from './Home.module.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import carCategories from '../../data/carCategories';
import Input from '../../components/Input/Input';
import searchIcon from '../../assets/searchIcon.svg'


const Home = () => {
	return (
		<section>
			<div >
				<span>Auto Auction</span>
				<span>List. Auction. Acquire</span>
			</div>

			<div className={style.SearchWrapper}>
				<Input
					width={460}
					placeholder='What are you looking to buy. eg Porsche 911, Toyota Supra, Tesla etc'
				/>

				<button
					className={style.SearchButton}>
					<img src={searchIcon} alt="" />
				</button>
			</div>

			<section className={style.CategoriesWrapper}>
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