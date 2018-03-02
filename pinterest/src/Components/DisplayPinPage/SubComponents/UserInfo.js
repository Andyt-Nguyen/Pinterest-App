import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../../Common';
import UserContainer from '../Styles/UserContainer';
import UserWrapper from '../Styles/UserWrapper';
import Anchor from '../Styles/Anchor';
import DescContainer from '../Styles/DescContainer';

const UserInfo = ({uid,pinEmail,avatarURL, firstName, lastName, desc, urlLink}) => (
	<UserContainer>
		<h1 style={{color:"#555555"}}>{desc}</h1>
		{
			urlLink !== ''
			? <Anchor href={urlLink} target="_blank">
			   <i>Source: </i>{urlLink}
			  </Anchor>
			: ''

		}
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
		color:'white',
		marginTop:'10px'
	},
	hr: {
		width:'100%',
		borderTop:'1px solid #efefef',
		borderRadius:'5px',
		margin:'15px 0'
	},
	anchorStyle: {
		color:"#555555",
		marginLeft:"10px",
		textDecoration:'none'
	}
}

export default UserInfo;
