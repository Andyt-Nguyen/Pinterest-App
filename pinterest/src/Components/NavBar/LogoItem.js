import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import LogoContainer from './Styles/LogoContainer';


const LogoItem = () => (
	<LogoContainer>
		<Link to="/" style={styles.logoMargin}>
			<SocialIcon network="pinterest" height='40px' width='40px'/>
		</Link>
		<div className="search" style={{width:'90%'}}>
		<span className="fa fa-search"></span>
		<input
			className="inputStyle"
			placeholder="Search" />
		</div>
	</LogoContainer>
);


const styles = {
	logoMargin: {
		marginLeft:'20px',
		marginRight: '20px',
		textDecoration: 'none'
	}
}

export default LogoItem;
