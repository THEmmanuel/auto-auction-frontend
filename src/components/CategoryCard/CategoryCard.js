import React from 'react';
import style from './CategoryCard.module.css';

const CategoryCard = (props) => {
	const cardStyle = {
		backgroundColor: props.color
	};

	return (
		<div className={style.CategoryCard} style={cardStyle}>
			<img src={props.image} alt="" />

			<div className={style.CategoryContent}>
				<span className={style.CategoryName}>
					{props.name}
				</span>

				<span className={style.CategoryDescription}>
					{props.description}
				</span>
			</div>
		</div>
	);
};

export default CategoryCard;