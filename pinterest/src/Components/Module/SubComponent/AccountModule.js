import React from 'react';
import Input from './Input';
import AnonUser from '../Style/AnonUser';
import { RadioWrapper, Button, Avatar , UploadContainer} from '../../Common';


const AccountModule = ({currentPic, previewImage, onNameChange, onLastChange, onImageChange, postUserAccount, radioGender, errorBox, showError}) => (
	<div style={{textAlign:'center'}}>
		{
			currentPic !== ''
			?  <UploadContainer
					onChange={onImageChange}
					picText="Nice!">
					<Avatar cPic={currentPic} style={{width:'170px',height:'170px'}}/>
				 </UploadContainer>
			:  <UploadContainer
					 onChange={onImageChange}
					 picText="Add Profile Pic">
					 <AnonUser className="fa fa-user-circle" />
				 </UploadContainer>
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
