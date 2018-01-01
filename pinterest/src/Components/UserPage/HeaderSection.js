import React from 'react';
import Header from './Styles/Header';

const HeaderSection = () => (
	<Header>
		<div>
			<h1 style={{margin:0,padding:0, color:"#555555", fontSize:'3.5em'}}>Andrew Nguyen</h1>
			<div style={styles.follows}>
				<div>
					<h5>0</h5>
					<h5>Followers</h5>
				</div>
				<div>
					<h5>9</h5>
					<h5>Following</h5>
				</div>
			</div>
		</div>

		<div>
			<span className="fa fa-user"
			style={styles.userThumbNail}></span>
		</div>
	</Header>
);


const styles = {
	follows: {
		display: 'flex',
		justifyContent: 'space-around',
		width: '300px',
		marginTop: '30px'
	},
	userThumbNail: {
		fontSize:'100px',
		borderRadius:'50%',
		padding: '50px',
		paddingLeft:'60px',
		paddingRight:'60px',
		color:'#555555',
		background:'#efefef'
	},
};
export default HeaderSection;
