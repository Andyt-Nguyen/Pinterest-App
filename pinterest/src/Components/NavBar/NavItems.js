import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './Styles/DropDownContainer';
import NavItemContainer  from './Styles/NavItemContainer';


const NavItems = ({account,isSetting,showDropdown,signOut}) => (
	<NavItemContainer>
		<Link to="/" style={styles.linkStyle}>Home</Link>
		<div>Explore</div>

		<Link to="/user" style={styles.linkStyle}>
			<span className="fa fa-user" style={styles.icon}></span>
			<span style={{marginLeft:'10px'}}>{account}</span>
		</Link>

		<div>
			<span className="fa fa-bell" style={styles.icon}></span>
		</div>

		<div>
			<span
					className="fa fa-cog"
					style={styles.icon}
					onClick={()=> showDropdown()}></span>
			{isSetting
				?<DropDownContainer>
					<ul style={styles.ulStyle}>
						<li style={{color:'#676767', borderBottom:'1px solid #ccc', padding:'10px'}}>
							<Link to="/settings" style={styles.linkStyle}>Account</Link>
						</li>
						<li style={{color:'#676767', padding:'10px'}}>
							<span style={{cursor:'pointer'}} onClick={() => signOut()}>Sign Out</span>
						</li>
					</ul>
				</DropDownContainer>
				: ''
			}
		</div>
	</NavItemContainer>
);


const styles = {
	icon: {
		fontSize:'20px',
		cursor:'pointer'
	},

	linkStyle: {
		textDecoration: 'none',
		color: '#bfbfbf'
	},

	ulStyle:{
		listStyle:'none',
		padding:0,
		margin:0,
	}
}
export default NavItems;
