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
import CurrentPic from './Style/CurrentPic';

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
			gender: '',
			currentPic: ''
		};
	}

	sendUserInfo() {
		const { authInfo, sendUserInfo } = this.props;
		const { avatarFile, first_name, last_name, gender } = this.state;
		sendUserInfo(authInfo.userId, first_name, last_name, gender, authInfo.email, avatarFile);
	}

	previewImage(e) {
		this.setState({avatarFile: e.target.files[0]}, () => {
			let picFile = this.state.avatarFile;
			let reader = new FileReader(); //Using File Reader API to convert file string
			if(picFile !== '') {
				let url = reader.readAsDataURL(picFile); //Converts file string to DataURL
				reader.onloadend = (e) => { //onloadend checks to see if the image is done downloading
					this.setState({currentPic:reader.result}) //.result retuns the url string to the image
				}
			}
		})
	}


	render() {
		console.log(this.state);
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
			<ModuleContainer showModule={'flex'}>
				<ModuleWrapper>
					<Header>
						<SocialIcon network="pinterest" />
					</Header>

						<div style={{textAlign:'center'}}>
							<h1>Account Basics</h1>

							{
								this.state.currentPic !== ''
								?  <ImageUpload
										onChange={(e) => this.setState({avatarFile:e.target.files[0]})}
										picText="Nice!">
										<CurrentPic cPic={this.state.currentPic} />
									 </ImageUpload>
								:  <ImageUpload
										 onChange={this.previewImage.bind(this)}
										 picText="Add Profile Pic">
										 <span className="fa fa-user-circle" style={{fontSize:'150px', marginTop:'20px', marginBottom:'20px'}}></span>
									 </ImageUpload>

							}

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
