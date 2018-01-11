import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDownContainer from '../Styles/DropDownContainer';
import NavItemContainer  from '../Styles/NavItemContainer';
import { Avatar } from '../../Common';

const NavItems = ({avatarURL,accountName,isSetting,showDropdown,signOut,email, closeDropDown}) => (
	<NavItemContainer>
		<NavLink activeStyle={styles.activeStyle} to="/" style={styles.linkStyle}>Home</NavLink>
		<div>Explore</div>

		<NavLink activeStyle={styles.activeStyle} to={`/${email}`} style={styles.linkStyle}>
			<div style={{width: '110px', display:'flex', alignItems:'center'}}>
				<Avatar cPic={avatarURL} style={{width:'40px',height: '40px', alignSelf:'flex-start'}} />
				<span style={{marginLeft:'10px'}}>{accountName}</span>
		</div>
		</NavLink>

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
							<NavLink activeStyle={styles.activeStyle} to="/settings" style={{color:'#626065',textDecoration:'none'}}>
								<span onClick={() => closeDropDown()}>Account</span>
							</NavLink>
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
	},

	activeStyle: {
		color:'#555555'
	}
}
export default NavItems;
