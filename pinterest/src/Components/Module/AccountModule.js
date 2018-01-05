import React from 'react';
import ImageUpload from './ImageUpload';
import Input from './Input';
import CurrentPic from './Style/CurrentPic';
import AnonUser from './Style/AnonUser';
import { RadioInput, RadioWrapper, Button } from '../Common';


const AccountModule = ({currentPic, previewImage, onNameChange, onLastChange, onImageChange, postUserAccount, radioGender, errorBox, showError}) => (
	<div style={{textAlign:'center'}}>
		{
			currentPic !== ''
			?  <ImageUpload
					onChange={onImageChange}
					picText="Nice!">
					<CurrentPic cPic={currentPic} />
				 </ImageUpload>
			:  <ImageUpload
					 onChange={onImageChange}
					 picText="Add Profile Pic">
					 <AnonUser className="fa fa-user-circle" />
				 </ImageUpload>
		}
		{
			showError
			? errorBox()
			: ''
		}
		<Input
				onTextChange={onNameChange}
				ph="Name" />
		<Input
				onTextChange={onLastChange}
				ph="Last Name" />
		<RadioWrapper>
			{radioGender}
		</RadioWrapper>
		<br/>
		<Button onClick={() => postUserAccount()} danger>Submit</Button>
	</div>
);

export default AccountModule;
