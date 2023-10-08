import React from 'react';
import style from './PrimaryButton.module.css';

const PrimaryButton = ({ text, click, width }) => {
	return (
		<button
			className={style.PrimaryButton}
			style={{ width: `${width}px` }}    // Set the width based on the width prop
			onClick={click}
		>
			{text}
		</button>
	);
}

export default PrimaryButton;
