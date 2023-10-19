import React from 'react';
import style from './Input.module.css';

const Input = props => {
	return (
		<div
			className={style.InputWrapper}
			style={{ width: `${props.width}px` }}
		>
			<span className={style.InputLabel}>
				{props.label}
			</span>

			<input
				type="text"
				placeholder={props.placeholder}
				className={style.Input}
				onChange={props.change}
				value={props.value}
				key={props.key}
			/>
		</div>
	)
}

export default Input;