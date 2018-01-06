import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../actions/actionPin';
import EmailAndPassword from './SubComponent/EmailAndPassword';
import Description from './SubComponent/Description';
import UserProfileInfo from './SubComponent/UserProfileInfo';
import SettingContainer from './Styles/SettingContainer';
import HeadingTitle from './Styles/HeadingTitle';
import { Button } from '../Common';

class SettingsPage extends Component {
	constructor() {
		super();
		this.state = {
			avatarFile: '',
			avatarURL: '',
			firstName: '',
			lastName: '',
			email: '',
			desc: ''
		};
	}

	onTextChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]:value
		})
	}

	previewImage(e) {
		this.setState({avatarFile:e.target.files[0]}, () => {
			let picFile = this.state.avatarFile
			let reader = new FileReader();
			let url = reader.readAsDataURL(picFile);
			reader.onloadend = (e) => {
				this.setState({avatarURL: reader.result});
			}
		})
	}

	updateUser() {
		const {firstName,lastName,avatarURL,desc, avatarFile} = this.state;
		const { userId } = this.props.authInfo;
		const { updateUserInfo }= this.props;
		updateUserInfo(userId, firstName, lastName, desc, avatarFile);
	}

	componentDidMount() {
		const { first_name:firstName, last_name:lastName, avatarURL, email } = this.props.userProfile;
		this.setState({firstName,lastName,avatarURL,email})
	}

	render() {
		const {firstName,lastName,email,avatarURL,desc} = this.state;
		return (
			<SettingContainer>
				<EmailAndPassword emailName={email} />
				<HeadingTitle>Profile</HeadingTitle>
				<UserProfileInfo
					avatarURL={avatarURL}
					firstName={firstName}
					lastName={lastName}
					onTextChange={this.onTextChange.bind(this)}
					onImageChange={this.previewImage.bind(this)}/>

				<Description
					desc={desc}
					onTextChange={this.onTextChange.bind(this)} />

				<Button
					primary style={{margin:'10px 0'}}
					onClick={this.updateUser.bind(this)}>Make Changes</Button>
			</SettingContainer>
		);
	}
}

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile,
		authInfo: state.authInfo
	}
}

export default connect(mapStateToProps, { updateUserInfo })(SettingsPage);
