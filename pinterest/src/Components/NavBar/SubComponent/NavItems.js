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
		<div>Explore</div>

		<UserInfo
			email={email}
			accountName={accountName}
			avatarURL={avatarURL} />

		<Icon icon="fa fa-bell"/>

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
