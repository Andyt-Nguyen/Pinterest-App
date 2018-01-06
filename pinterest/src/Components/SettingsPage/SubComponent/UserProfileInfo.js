import React from 'react';
import NameInput from './NameInput';
import { UploadImage, Avatar } from '../../Common';
import TextFieldWrapper from '../Styles/TextFieldWrapper';

const UserProfileInfo = ({avatarURL, firstName, lastName, onTextChange, onImageChange}) => (
	<div>
		<div style={{display:'flex', justifyContent:'flex-start'}}>
			<UploadImage onChange={onImageChange}>
				<Avatar cPic={avatarURL} style={{width:'170px', height:'170px'}}/>
			</UploadImage>
		</div>

		<TextFieldWrapper>
			<NameInput
			 	name={firstName}
				nameState='firstName'
				onTextChange={onTextChange}
				label="Name" />

			<NameInput
				name={lastName}
				nameState="lastName"
				onTextChange={onTextChange}
				label="Last Name" />
		</TextFieldWrapper>
	</div>
);

export default UserProfileInfo;
