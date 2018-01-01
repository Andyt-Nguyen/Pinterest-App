import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Styles/Nav';
import NavItem from './Styles/NavItem';
import './Styles/search.css';

const NavBar = () => (
	<div>
		<Nav>

			<div style={styles.logoInputContainer}>
				<Link to="/" style={styles.logoMargin}>
					<img src="https://seeklogo.com/images/P/pinterest-icon-logo-D4965B6748-seeklogo.com.png" height='40px' width='40px'/>
				</Link>
				<div className="search" style={{width:'90%'}}>
				<span className="fa fa-search"></span>
				<input
					className="inputStyle"
					placeholder="Search" />
				</div>
			</div>

			<div style={styles.navItemsContainer}>
				<Link to="/" style={styles.linkStyle}>Home</Link>
				<div>Explore</div>

				<Link to="/user" style={styles.linkStyle}>
					<span className="fa fa-user" style={styles.icon}></span>
					<span style={{marginLeft:'10px'}}>Andrew</span>
				</Link>

				<div>
					<span className="fa fa-bell" style={styles.icon}></span>
				</div>

				<Link to="/settings" style={{fontSize:'30px', textDecoration:'none'}}>...</Link>
			</div>

		</Nav>
	</div>
);

const styles = {
	logoMargin: {
		marginLeft:'20px',
		marginRight: '20px',
		textDecoration: 'none'
	},

	logoInputContainer: {
		display:'flex',
		justifyContent:'space-between',
		width: '70%',
		alignItems:'center'
	},

	navItemsContainer: {
		display:'flex',
		justifyContent:'space-around',
		alignItems:'center',
		width: '400px',
		fontSize:'17px',
		color:"#bfbfbf",
		fontWeight:700,
	},

	icon: {
		fontSize:'20px'
	},

	linkStyle: {
		textDecoration: 'none'
	}
}
export default NavBar;

// #efefef Used for the borderBottom of Nav
//
