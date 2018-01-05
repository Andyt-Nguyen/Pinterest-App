import React from 'react';
import ImageWrapper from '../Styles/ImageWrapper';
import Image from '../Styles/Image';

const PinItem = () => (
		<ImageWrapper>
			<Image alt="yoyyoyy" src="https://img.wennermedia.com/featured-promo-724/lacey-baker-profile-rolling-stone-2017-ec439dfb-a2ff-49e2-b85b-54750fb93b8c.jpg" />
			<p>This is skateboarding</p>
			<div style={styles.saveContainer}>
				<span className="fa fa-thumb-tack" style={styles.text}></span>
				<span style={{color:'#fff'}}>Save</span>
			</div>
		</ImageWrapper>
);

const styles = {
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
