import React from 'react';
import style from './CategoryCard.module.css';

const CategoryCard = (props) => {
	const cardStyle = {
		backgroundColor: props.color, // Set the background color based on the color prop
	};

	return (
		<div className={style.categoryCard} style={cardStyle}>
			<img src={props.image} alt="" />
			<span>{props.name}</span>
			<span>{props.description}</span>
		</div>
	);
};

export default CategoryCard;
