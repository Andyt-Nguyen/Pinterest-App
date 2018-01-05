import React from 'react';
const NameInput = ({label, name}) => (
	<div>
		<p>{label}</p>
		<input style={styles.inputStyle} value={name}/>
	</div>
);

const styles = {
		inputStyle: {
		width: '100%',
		background: '#efefef',
		border: 'none',
		borderRadius: '5px',
		fontSize: '18px',
		fontWeight: 700,
		color: '#555555',
		padding: '10px'
	}
}

export default NameInput;