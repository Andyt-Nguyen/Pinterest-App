import React from 'react';
import PinItem from '../Styles/PinItem';
import { PropagateLoader } from 'react-spinners';

const PinBox = ({children,text,showModule, bg, isLoading,onLoad}) => (
	<div style={{cursor:'pointer'}} onClick={showModule}>
	<img
			src={bg}
			style={{width:'0px',height:'0px'}}
			onLoad={onLoad}/>
		<PinItem bg={bg}>
			<div style={{background:'rgba(0,0,0,0.2)', width:'100%', height: '100%', display:'flex', alignItems: 'center', justifyContent: 'center', borderRadius:'5px', position:'relative'}}>
			{
				isLoading
				? <div style={{position:'absolute', top:'5%', left:'50%'}}>
						<PropagateLoader color='crimson' />
					</div>
				: ''
			}
				{children}
			</div>
		</PinItem>
		<p style={styles.textStyle}>{text}</p>
	</div>
);

const styles = {
	textStyle: {
		color: '#b5b5b5',
		letterSpacing: '1px',
		width: '336px',
		height:'38px',
		overflow:'hidden',
		fontWeight:700
	}
};

export default PinBox
