import React from 'react';

const Input = ({onTextChange,ph}) => (
	<input
			style={styles.inputStyle}
			type="text"
			onChange={onTextChange}
			placeholder={ph} />
);

const styles = {
	inputStyle: {
		width: '100%',
		fontSize: '20px',
		borderRadius: '5px',
		margin: '3px 0',
		padding: '5px',
		border: '2px solid #efefef',
		display: 'block'
	}
};

export default Input;
