import React from 'react';
import ImageWrapper from '../Styles/ImageWrapper';
import Image from '../Styles/Image';

const PinItem = ({src,desc}) => (
		<ImageWrapper>
			<Image alt="image" src={src} />
			<p style={styles.descStyle}>{desc}</p>
			<div style={styles.saveContainer}>
				<span className="fa fa-thumb-tack" style={styles.text}></span>
				<span style={{color:'#fff'}}>Save</span>
			</div>
		</ImageWrapper>
);

const styles = {
	descStyle: {
		width:'100%',
	 	height:'36px',
		overflow:'hidden',
		color:'#555555',
		fontWeight:700
	},

	saveContainer: {
		position:'absolute',
		top:'10px',
		right:'10px',
		background: 'crimson',
		padding: '10px',
		textAlign:'center',
		borderRadius:'10px'
	},

	text: {
		color:'white',
	 	borderRadius:"50%",
		marginRight:'10px'
	}
}
export default PinItem;
