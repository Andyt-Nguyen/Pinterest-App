import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DropDownContainer from '../Styles/DropDownContainer';
import NavItemContainer  from '../Styles/NavItemContainer';
import UserInfo from './UserInfo';
import DropDown from './DropDown';
import Icon from './Icon';

const NavItems = ({avatarURL,accountName,isSetting,showDropdown,signOut,email, closeDropDown}) => (
	<NavItemContainer>
		<NavLink exact activeStyle={styles.activeStyle} to="/" style={styles.linkStyle}>
			<Icon icon="fa fa-home"></Icon>
		</NavLink>

		<UserInfo
			email={email}
			accountName={accountName}
			avatarURL={avatarURL} />


		<div>
			<NavLink activeStyle={styles.activeStyle} to="/settings" style={styles.linkStyle}>
				<Icon icon="fa fa-cog" showDropdown={showDropdown}/>
			</NavLink>

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
		color:'#bfbfbf',
		textDecoration:'none'
	},
	activeStyle: {
		color:'#555555'
	}
}
export default NavItems;
