import React from 'react';

const NameInput = ({label, name, nameState, onTextChange, showNameError, showLNError}) => (
	<div>
		<p>
			{label}
			{
				showNameError
				? <span style={{color:'red'}}>* {label}</span>
				: ''
			}
			{
				showLNError
				? <span style={{color:'red'}}>* {label}</span>
				: ''
			}
		</p>
		<input
				style={styles.inputStyle}
				name={nameState}
				onChange={onTextChange}
				value={name}/>
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
