import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from '../../Common';

const UserInfo = ({email, avatarURL, accountName}) => (
	<NavLink activeStyle={styles.activeStyle} to={`/${email}`} style={styles.linkStyle}>
		<div style={{width: '110px', display:'flex', alignItems:'center'}}>
			<Avatar cPic={avatarURL} style={{width:'40px',height: '40px', alignSelf:'flex-start'}} />
			<span style={{marginLeft:'10px'}}>{accountName}</span>
		</div>
	</NavLink>
);

const styles = {
	activeStyle: {
		color:'#555555'
	},
	linkStyle: {
		textDecoration: 'none',
		color: '#bfbfbf'
	},
}
export default UserInfo;
