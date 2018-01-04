import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserInfo, userSignOut } from '../../actions/actionPin';
import ModuleWrapper from './Style/ModuleWrapper';
import ModuleContainer from './Style/ModuleContainer';
import { SocialIcon } from 'react-social-icons';
import ImageUpload from './ImageUpload';
import Header from './Style/Header';
import { RadioInput, RadioWrapper, Button } from '../Common';
import Input from './Input';

class Module extends Component {
	static defaultProps = {
		gender: [
			{
				type:'male',
				label: 'Male'
			}, {
				type:'female',
				label: 'Female'
			}, {
				type: 'non_binary',
				label: 'Non Binary'
			}
		]
	}

	constructor() {
		super();
		this.state = {
			avatarFile: '',
			first_name: '',
			last_name: '',
			gender: ''
		};
	}

	sendUserInfo() {
		const { authInfo, sendUserInfo } = this.props;
		const { avatarFile, first_name, last_name, gender } = this.state;
		sendUserInfo(authInfo.userId, first_name, last_name, gender, authInfo.email, avatarFile);
	}

	signout() {
		this.props.userSignOut();
	}

	render() {

		let hideModule = () => {
			if(this.props.userProfile.hideModule) {
				return 'none'
			} else {
				return 'flex'
			}
		};

		const radioInput = this.props.gender.map( sex =>
			<RadioInput
				key={sex.label}
				onChange={(e) => this.setState({gender:e.target.value})}
			 	gender={sex.type} label={sex.label} name="gender" />
		);


		return (
			<ModuleContainer showModule={hideModule}>
				<button onClick={this.signout.bind(this)}>Sign out</button>
				<ModuleWrapper>
					<Header>
						<SocialIcon network="pinterest" />
					</Header>

						<div style={{textAlign:'center'}}>
							<h1>Account Basics</h1>

							<ImageUpload
									src="https://placehold.it/150"
									onChange={(e) => this.setState({avatarFile:e.target.files[0]})} />

							<Input
									onTextChange={(e) => this.setState({first_name:e.target.value})}
									ph="Name" />
							<Input
									onTextChange={(e) => this.setState({last_name:e.target.value})}
									ph="Last Name" />

							<RadioWrapper>
								{radioInput}
							</RadioWrapper>
						</div>

					<Button onClick={this.sendUserInfo.bind(this)} danger>Submit</Button>
				</ModuleWrapper>
			</ModuleContainer>
		);
	}
}

function mapStateToProps(state) {
	return {
		authInfo: state.authInfo,
		userProfile: state.userProfile
	}
}

export default connect(mapStateToProps, { sendUserInfo, userSignOut })(Module);
