import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDownContainer from '../Styles/DropDownContainer';
import NavItemContainer  from '../Styles/NavItemContainer';
import UserInfo from './UserInfo';
import DropDown from './DropDown';

const NavItems = ({avatarURL,accountName,isSetting,showDropdown,signOut,email, closeDropDown}) => (
	<NavItemContainer>
		<NavLink activeStyle={styles.activeStyle} to="/" style={styles.linkStyle}>Home</NavLink>
		<div>Explore</div>

		<UserInfo
			email={email}
			accountName={accountName}
			avatarURL={avatarURL} />

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
					<DropDown signOut={signOut} closeDropDown={closeDropDown}/>
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
	activeStyle: {
		color:'#555555'
	}
}
export default NavItems;
