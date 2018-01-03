import React from 'react';
import './radioBtn.css';

const RadioInput = ({name,gender,label, onChange}) => (
	<div>
		<input
			onChange={onChange}
			type="radio" name={name}
			id={gender} value={gender}/>
		<label htmlFor={gender}>{label}</label>
	</div>
);

export { RadioInput }
