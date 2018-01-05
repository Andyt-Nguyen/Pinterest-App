import React from 'react';
import HeadingTitle from '../Styles/HeadingTitle';

const Description = () => (
	<div style={styles.marginContainer}>
		<HeadingTitle>Description</HeadingTitle>
		<textarea style={styles.textarea} placeholder={'What do you want people to know about you?'}/>
	</div>
);

const styles = {
	marginContainer: {
		marginTop: '30px'
	},

	textarea: {
		height: '200px',
		width: '500px',
		border: 'none',
		background: '#efefef',
		marginTop: '10px',
		resize:'none',
		fontSize: '20px'
	}
}

export default Description;
