import React from 'react';
import RadioBtn from './RadioInput';
import HeadingTitle from './Styles/HeadingTitle';
import './Styles/radioBtn.css';

const AccountSection = () => (
	<div>

		<div style={{marginTop:'20px', marginBottom:'30px'}}>
			<HeadingTitle style={{color:'#555555'}}>Account Basics</HeadingTitle>
			<br/>
			<p>Email Address</p>
			<input style={styles.inputStyle} type="text" value="andythenuge@gmail.com"/>
		</div>

		<div style={{marginTop:'20px', marginBottom:'30px'}}>
			<p>Password</p>
			<button style={styles.btnStyle}>Change Your Password</button>
		</div>

		<div>
			<p>Gender</p>
			<div style={styles.radioLayout}>
				<RadioBtn gender="male" label="Male" name="gender" />
				<RadioBtn gender="female" label="Female" name="gender" />
				<RadioBtn gender="nonBinary" label="Non-Binary" name="gender" />
			</div>
		</div>
		<br />

		<div>
			<HeadingTitle>Profile</HeadingTitle>
			<br />

			<div style={{display:'flex', justifyContent:'space-between'}}>
				<div>
					<p>First Name</p>
					<input type="text" style={styles.nameStyle} />
				</div>
				<div>
					<p>Last Name</p>
					<input type="text" style={styles.nameStyle} />
				</div>
			</div>
		</div>

	</div>
);


const styles = {
	inputStyle: {
		width: '100%',
		border: 'none',
		borderRadius: '5px',
		background: '#efefef',
		fontSize: '18px',
		fontWeight: '700',
		color: '#555555',
		padding: '10px'
	},

	nameStyle: {
		width:'100%',
		background: '#efefef',
		border:'none',
		borderRadius:'5px',
		fontSize: '18px',
		fontWeight:'700',
		color:'#555555',
		padding: '10px'
	},

	btnStyle: {
		border: 'none',
		borderRadius: '5px',
		background: '#efefef',
		fontSize: '18px',
		fontWeight: '700',
		color: '#555555',
		padding: '10px'
	},

	radioLayout: {
		marginTop: '10px',
		display: 'flex',
		justifyContent: 'space-between',
		width: '300px'
	}

}
export default AccountSection;
