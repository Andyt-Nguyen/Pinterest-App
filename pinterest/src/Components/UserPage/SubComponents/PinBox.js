import React from 'react';
import PinItem from '../Styles/PinItem';

const PinBox = ({children,text,showModule, bg}) => (
	<div style={{cursor:'pointer'}} onClick={showModule}>
		<PinItem bg={bg}>
			<div style={{background:'rgba(0,0,0,0.2)', width:'100%', height: '100%', display:'flex', alignItems: 'center', justifyContent: 'center', borderRadius:'5px'}}>
				{children}
			</div>
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
