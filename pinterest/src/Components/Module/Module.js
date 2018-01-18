import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserInfo, userSignOut } from '../../actions/actionPin';
import { SocialIcon } from 'react-social-icons';
import RocketGif from '../SVG/RocketGif';
import AccountModule from './SubComponent/AccountModule';
import Header from './Style/Header';
import ErrorBox from './Style/ErrorBox';
import { RadioInput, ModuleWrapper, ModuleContainer } from '../Common';

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
			modalStyle: 'none',
			showError:false,
			showLoader: false
		};
	}

	sendUserInfo() {
		const { authInfo } = this.props;
		const { avatarFile, first_name, last_name, gender, currentPic } = this.state;
		if(avatarFile && first_name && last_name && gender && currentPic){
			this.setState({showLoader:true},() => {
				setTimeout(() => {
					sendUserInfo(authInfo.userId, first_name, last_name, gender, authInfo.email, avatarFile);
					this.showModule();
				},3000);
			})

		} else if(first_name && last_name && gender && currentPic) {
			this.setState({showLoader:true},() => {
				setTimeout(() => {
					sendUserInfo(authInfo.userId, first_name, last_name, gender, authInfo.email, avatarFile,currentPic);
					this.showModule();
				},3000);
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

	showModule() {
		setTimeout(() => {
			if(this.props.userProfile.hideModule) {
				this.setState({modalStyle:'none'})
			} else {
				this.setState({modalStyle:'flex', currentPic:this.props.authInfo.photoURL})
			}
		},500)
	}


	componentWillMount() {
		this.showModule();
	}

	render() {
		console.log(this.props.authInfo);
		const radioInput = this.props.gender.map( sex =>
			<RadioInput
				key={sex.label}
				onChange={(e) => this.setState({gender:e.target.value})}
			 	gender={sex.type} label={sex.label} name="gender" />
		);


		return (
			<ModuleContainer position="center" showModule={this.state.modalStyle}>
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

export default connect(mapStateToProps, { userSignOut })(Module);
