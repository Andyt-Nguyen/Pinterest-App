import React from 'react';
import PinItem from '../Styles/PinItem';

const PinBox = ({children,text,showModule}) => (
	<div style={{cursor:'pointer'}} onClick={showModule}>
		<PinItem>
			{children}
		</PinItem>
		<h3 style={styles.textStyle}>{text}</h3>
	</div>
);

const styles = {
	textStyle: {
		color: '#b5b5b5',
		letterSpacing: '1px'
	}
};

export default PinBox
