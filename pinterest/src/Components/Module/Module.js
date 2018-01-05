import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserInfo, userSignOut } from '../../actions/actionPin';
import { SocialIcon } from 'react-social-icons';
import RocketGif from '../SVG/RocketGif';
import AccountModule from './SubComponent/AccountModule';
import Header from './Style/Header';
import ModuleWrapper from './Style/ModuleWrapper';
import ModuleContainer from './Style/ModuleContainer';
import ErrorBox from './Style/ErrorBox';
import { RadioInput, RadioWrapper, Button } from '../Common';

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
			currentPic: '',
			showError:false,
			showLoader: false
		};
	}

	sendUserInfo() {
		const { authInfo, sendUserInfo } = this.props;
		const { avatarFile, first_name, last_name, gender, currentPic } = this.state;
		if(avatarFile  && first_name && last_name && gender && currentPic){
			this.setState({showLoader:true},() => {
				setTimeout(() => {
					sendUserInfo(authInfo.userId, first_name, last_name, gender, authInfo.email, avatarFile);
				},10000);
			})

		} else{
			this.setState({showError:true});
			this.handleErrorInputs();
		}
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

	handleErrorInputs() {
		let { avatarFile, first_name, last_name, gender, currentPic } = this.state;

		let checkStyle = () => {
			if(!avatarFile || !first_name || !last_name || !gender || !currentPic) {
				return {display:'block'}
			} else{
				this.setState({showError:false});
				return {display:'none'}
			}
		}

		if(!avatarFile || !first_name || !last_name || !gender || !currentPic) {
			return (
				<ErrorBox style={checkStyle()}>
				 { avatarFile === '' ? <p>Picture is required</p> : ''}
				 { first_name === '' ? <p>First name is required</p> : ''}
				 { last_name === '' ? <p>Last name is required</p> : ''}
				 { gender === '' ? <p>Gender is required</p> : ''}
			  </ErrorBox>
			);
		}
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
				<ModuleWrapper>
					<Header>
						<SocialIcon network="pinterest" />
					</Header>

					{
						!this.state.showLoader
						? <h1 style={{fontFamily:'Quicksand'}}>Account Information</h1>
						: <h1 style={{fontFamily:'Quicksand'}}>{`Sweet! We're getting you set up`}</h1>
					}


					{
						!this.state.showLoader
						? <AccountModule
								showError={this.state.showError}
								errorBox={this.handleErrorInputs.bind(this)}
								currentPic={this.state.currentPic}
								onImageChange={this.previewImage.bind(this)}
								onNameChange={e => this.setState({first_name: e.target.value})}
								onLastChange={e => this.setState({last_name: e.target.value})}
								postUserAccount={this.sendUserInfo.bind(this)}
								radioGender={radioInput} />
						 : <RocketGif />
					}

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
