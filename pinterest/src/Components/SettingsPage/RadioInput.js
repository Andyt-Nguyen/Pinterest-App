import React from 'react';

const RadioInput = ({name,gender,label}) => (
	<div>
		<input type="radio" name={name} id={gender} />
		<label htmlFor={gender}>{label}</label>
	</div>
);

export default RadioInput
