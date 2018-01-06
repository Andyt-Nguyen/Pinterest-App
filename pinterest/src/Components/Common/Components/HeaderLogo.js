import React from 'react';
import { SocialIcon } from 'react-social-icons';

const HeaderLogo = ({hideModule}) => (
	<div style={styles.headerLogo}>
		<SocialIcon network="pinterest" style={styles.icon} />
		<span
			onClick={hideModule}
			style={styles.deleteBtn}>&#10006;</span>
	</div>
);

const styles = {
	headerLogo: {
		width: '100%',
		height: '50px',
		background: '#efefef',
		marginBottom: '10px',
		display:'flex',
		justifyContent:'space-between'
	},
	deleteBtn: {
		fontSize:'40px',
		paddingRight:'10px',
		cursor:'pointer'
	},
	icon: {
		width:'80px',
		height:'80px'
	}
}

export default HeaderLogo;
