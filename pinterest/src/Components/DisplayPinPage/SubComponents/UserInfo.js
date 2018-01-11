import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../../Common';
import UserContainer from '../Styles/UserContainer';
import UserWrapper from '../Styles/UserWrapper';
import DescContainer from '../Styles/DescContainer';

const UserInfo = ({uid,pinEmail,avatarURL, firstName, lastName, desc}) => (
	<UserContainer>
		<UserWrapper>
			<Link to={`/user/${pinEmail}`} style={styles.linkStyle}>
				<Avatar cPic={avatarURL} style={{width:'75px',height:'75px'}} />
			</Link>

			<div style={{marginLeft:'10px'}}>
				<p style={{fontSize:'15px'}}>Submitted by</p>
				<p style={{color:'#555555', fontWeight:700, fontSize:'18px'}}>
					{firstName} {lastName}
				</p>
			</div>
	 </UserWrapper>

	 <div style={styles.hr}></div>
	  <DescContainer>
		 <p>{desc}</p>
	 </DescContainer>
	</UserContainer>
);

const styles = {
	linkStyle: {
		textDecoration: 'none',
		color:'white'
	},
	hr: {
		width:'100%',
		borderTop:'1px solid #efefef',
		borderRadius:'5px',
		margin:'15px 0'
	}
}

export default UserInfo;
