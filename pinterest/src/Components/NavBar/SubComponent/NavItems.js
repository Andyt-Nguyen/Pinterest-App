import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDownContainer from '../Styles/DropDownContainer';
import NavItemContainer  from '../Styles/NavItemContainer';
import UserInfo from './UserInfo';
import DropDown from './DropDown';
import Icon from './Icon';

const NavItems = ({avatarURL,accountName,isSetting,showDropdown,signOut,email, closeDropDown}) => (
	<NavItemContainer>
		<NavLink activeStyle={styles.activeStyle} to="/" style={styles.linkStyle}>Home</NavLink>
		<NavLink activeStyle={styles.activeStyle} style={styles.linkStyle} to="/">Explore</NavLink>

		<UserInfo
			email={email}
			accountName={accountName}
			avatarURL={avatarURL} />


		<div>
			<Icon icon="fa fa-cog" showDropdown={showDropdown}/>

			{
				isSetting
				? <DropDown signOut={signOut} closeDropDown={closeDropDown}/>
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
