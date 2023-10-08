import React from 'react';
import style from './Input.module.css';

const Input = props => {
	return (
		<input
			type="text"
			placeholder={props.placeholder}
			className={style.Input}
			style={{ width: `${props.width}px` }}
		/>
	)
}

export default Input;