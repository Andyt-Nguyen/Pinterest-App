import React from 'react';
import Header from '../Styles/Header';
import { Avatar } from '../../Common';

const HeaderSection = ({firstName, lastName, avatarURL}) => (
	<Header>
		<div>
			<h1 style={{margin:0,padding:0, color:"#555555", fontSize:'3.5em'}}>{firstName} {lastName}</h1>
			<div style={styles.description}>
			 <p>Description</p>
			</div>
		</div>

		<div>
			<Avatar cPic={avatarURL} style={{width:'170px', height:'170px'}}/>
		</div>
	</Header>
);


const styles = {
	description: {
		width: '300px',
		marginTop: '30px'
	}
};
export default HeaderSection;
