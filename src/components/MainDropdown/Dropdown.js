import React, { useState, useEffect } from 'react';
import style from './Dropdown.module.css';

const Dropdown = (props) => {
	const [selectedOption, setSelectedOption] = useState('');

	useEffect(() => {
		if (props.selectedOption) {
			setSelectedOption(props.selectedOption);
		}
	}, [props.selectedOption]);

	const handleOptionChange = event => {
		const selectedValue = event.target.value;
		setSelectedOption(selectedValue);
		if (props.change) {
			props.change(selectedValue)
		}
	}


	return (
		<div className={style.DropdownWrapper}>
			<span className={style.DropdownTitle}>
				{props.DropdownTitle}
			</span>

			<select name=""
				className={style.Dropdown}
				onChange={handleOptionChange}
				value={selectedOption}>
				{props.dataArray.map((attribute) =>
					<option value={attribute} key={attribute}>
						{attribute}
					</option>)
				}
			</select>
		</div>
	)
}

export default Dropdown;