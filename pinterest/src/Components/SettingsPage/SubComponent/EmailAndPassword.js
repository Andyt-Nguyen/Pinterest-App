import React from 'react';
import HeadingTitle from '../Styles/HeadingTitle';
import EmailInput from '../Styles/EmailInput';
import Button from '../Styles/Button';

const EmailAndPassword = ({emailName}) => (
	<div>
		<div style={{marginTop:'20px', marginBottom:'30px'}}>
			<HeadingTitle style={{color:'#555555'}}>Account Basics</HeadingTitle>
			<br/>
			<p>Email Address</p>
			<EmailInput>{emailName}</EmailInput>
		</div>

		<div style={{marginTop:'20px', marginBottom:'30px'}}>
			<p>Password</p>
			<Button>Change Your Password</Button>
		</div>
	</div>
);

export default EmailAndPassword;
