import React from 'react';
import '../Styles/radioBtn.css';

const RadioInput = ({name,gender,label,onChange,check}) => (
	<div>
		<input
			onChange={onChange}
			type="radio" name={name}
			id={gender} value={gender}
			onClick={(e) => console.log(e.target.value)}/>
		<label htmlFor={gender}>{label}</label>
	</div>
);

export { RadioInput }
