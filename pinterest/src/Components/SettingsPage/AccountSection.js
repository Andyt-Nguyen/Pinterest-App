import React from 'react';
import RadioInput from './RadioInput';
import HeadingTitle from './Styles/HeadingTitle';
import RadioWrapper from './Styles/RadioWrapper';
import EmailInput from './Styles/EmailInput';
import NameInput from './Styles/NameInput';
import Button from './Styles/Button';
import './Styles/radioBtn.css';

const AccountSection = () => (
	<div>

		<div style={{marginTop:'20px', marginBottom:'30px'}}>
			<HeadingTitle style={{color:'#555555'}}>Account Basics</HeadingTitle>
			<br/>
			<p>Email Address</p>
			<EmailInput type="text" value="andythenuge@gmail.com"/>
		</div>

		<div style={{marginTop:'20px', marginBottom:'30px'}}>
			<p>Password</p>
			<Button>Change Your Password</Button>
		</div>

		<div>
			<p>Gender</p>
			<RadioWrapper>
				<RadioInput gender="male" label="Male" name="gender" />
				<RadioInput gender="female" label="Female" name="gender" />
				<RadioInput gender="nonBinary" label="Non-Binary" name="gender" />
			</RadioWrapper>
		</div>
		<br />

		<div>
			<HeadingTitle>Profile</HeadingTitle>
			<br />

			<div style={{display:'flex', justifyContent:'space-between'}}>
				<div>
					<p>First Name</p>
					<NameInput type="text" />
				</div>
				<div>
					<p>Last Name</p>
					<NameInput type="text" />
				</div>
			</div>
		</div>

	</div>
);


export default AccountSection;
