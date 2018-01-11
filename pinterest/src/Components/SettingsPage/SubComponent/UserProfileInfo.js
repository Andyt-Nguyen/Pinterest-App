import React from 'react';
import NameInput from './NameInput';
import { UploadContainer, Avatar } from '../../Common';
import TextFieldWrapper from '../Styles/TextFieldWrapper';

const UserProfileInfo = ({avatarURL, firstName, lastName, onTextChange, onImageChange, showNameError, showLNError}) => (
	<div>
		<div style={{display:'flex', justifyContent:'flex-start'}}>
			<UploadContainer onChange={onImageChange}>
				<Avatar cPic={avatarURL} style={{width:'170px', height:'170px'}}/>
			</UploadContainer>
		</div>

		<TextFieldWrapper>
			<NameInput
				showNameError={showNameError}
			 	name={firstName}
				nameState='firstName'
				onTextChange={onTextChange}
				label="Name" />

			<NameInput
				showLNError={showLNError}
				name={lastName}
				nameState="lastName"
				onTextChange={onTextChange}
				label="Last Name" />
		</TextFieldWrapper>
	</div>
);

export default UserProfileInfo;
