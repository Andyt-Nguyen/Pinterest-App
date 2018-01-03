import React from 'react';
import './radioBtn.css';

const RadioInput = ({name,gender,label}) => (
	<div>
		<input type="radio" name={name} id={gender} />
		<label htmlFor={gender}>{label}</label>
	</div>
);

export { RadioInput }
