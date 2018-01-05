import React from 'react';
import RadioInput from './RadioInput';
import HeadingTitle from './Styles/HeadingTitle';
import NameInput from './SubComponent/NameInput';
import EmailAndPassword from './SubComponent/EmailAndPassword';
import TextFieldWrapper from './Styles/TextFieldWrapper';
import Description from './SubComponent/Description';
import { Button, UploadImage, Avatar } from '../Common';

const AccountSection = ({firstName,lastName,avatarURL,email}) => (
	<div>
		<EmailAndPassword emailName={email} />
			<HeadingTitle>Profile</HeadingTitle>

			<div style={{display:'flex', justifyContent:'flex-start'}}>
				<UploadImage>
					<Avatar cPic={avatarURL} style={{width:'170px', height:'170px'}}/>
				</UploadImage>
			</div>
			<TextFieldWrapper>
				<NameInput name={firstName} label="Name"/>
				<NameInput name={lastName} label="Last Name" />
			</TextFieldWrapper>
			<Description />

		<div style={{marginTop:'30px', marginBottom:'20px'}}>
			<Button primary>Make Changes</Button>
		</div>
	</div>
);


export default AccountSection;

// <div>
// 	<p>Gender</p>
// 	<RadioWrapper>
// 		{genderRadio}
// 	</RadioWrapper>
// </div>
