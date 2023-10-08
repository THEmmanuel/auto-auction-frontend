import React from 'react';
import style from './SecondaryButton.module.css';

const SecondaryButton = ({ text, click, width }) => {
	return (
		<button
			className={style.SecondaryButton}
			style={{ width: `${width}px` }}    // Set the width based on the width prop
			onClick={click}
		>
			{text}
		</button>
	);
}

export default SecondaryButton;
