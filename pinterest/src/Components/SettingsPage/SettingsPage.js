import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../actions/actionPin';
import EmailAndPassword from './SubComponent/EmailAndPassword';
import Description from './SubComponent/Description';
import UserProfileInfo from './SubComponent/UserProfileInfo';
import SettingContainer from './Styles/SettingContainer';
import HeadingTitle from './Styles/HeadingTitle';
import { Button } from '../Common';
import CheckMark from '../SVG/CheckMark';

class SettingsPage extends Component {
	constructor() {
		super();
		this.state = {
			avatarFile: '',
			avatarURL: '',
			firstName: '',
			lastName: '',
			email: '',
			desc: '',
			showLoader: false
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
		this.setState({showLoader:true}, () => {
			setTimeout(() => {
				this.setState({showLoader:false})
				updateUserInfo(userId, firstName, lastName, desc, avatarFile);
			},2500)
		})
	}

	renderButton() {
		const { first_name, last_name, avatarURL:avatarUrl, desc:Desc } = this.props.userProfile
		const { firstName,lastName,email,avatarURL,desc } = this.state;
		return (
			firstName !== first_name || lastName !== last_name || avatarURL !== avatarUrl || desc !== Desc
			? <Button
				 primary style={{margin:'10px 0'}}
				 onClick={this.updateUser.bind(this)}>Make Changes</Button>

			: <Button style={{cursor:'not-allowed', margin:'10px 0'}}>Make Changes</Button>
		)
	}

	componentDidMount() {
		const { first_name:firstName, last_name:lastName, avatarURL, email, desc } = this.props.userProfile;
		this.setState({firstName,lastName,avatarURL,email,desc})
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

					{this.state.showLoader ? <CheckMark color="#53eb91" successText="Awesome profile saved!" /> : ''}


				<Description
					desc={desc}
					onTextChange={this.onTextChange.bind(this)}
					val={desc}/>

				{
					this.renderButton()
				}
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

export default connect(mapStateToProps, null)(SettingsPage);
