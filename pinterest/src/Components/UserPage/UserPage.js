import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { sendUserPin, authListener, getSavedPins } from '../../actions/actionPin';
import { Link } from 'react-router-dom';
import MainPageTemplate from './SubComponents/MainPageTemplate';
import PinBox from './SubComponents/PinBox';
import IconWrapper from './Styles/IconWrapper';
import { CreateModule } from '../Common';
import moment from 'moment';
import CheckMark from '../SVG/CheckMark';
import { parsedEmail } from '../../functions/reusable';

class UserPage extends Component {
	constructor() {
		super();
		this.state = {
			showCreateModule: false,
			showSuccess: false,
			showError: false,
			isLoading: true,
			previewImage: '',
			userPinPic: '',
			desc: '',
			urlLink: '',
			recentPin: [],
			recentSavedPin: []
		}
	}

	previewImage(e) {
		this.setState({userPinPic:e.target.files[0],}, () => {
			let viewFile = this.state.userPinPic;
			let reader = new FileReader();
			let url = reader.readAsDataURL(viewFile);
			reader.onloadend = e => {
				this.setState({previewImage: reader.result});
			}
		});
	}

	renderSuccess() {
		return (
			this.state.showSuccess
			? <CheckMark color="#73AF55" successText="Sweet pin posted!"/>
			: ''
		)
	}

	sendUserPin() {
		let fullDate = moment()._d;
		let {userPinPic, desc, urlLink} = this.state;
		let { first_name, last_name, avatarURL, email } = this.props.userProfile;
		let newEmail = parsedEmail(email);
		let { userId } = this.props.authInfo;
		if(userPinPic !== ''){
			this.setState({showCreateModule:false}, () => {
				sendUserPin(userId, fullDate, userPinPic, desc, urlLink, first_name, last_name, avatarURL, newEmail);
				this.setState({showSuccess:true}, () => {
					setTimeout(()=>{
						if(this.state.recentPin !== undefined && this.state.recentPin !== null) {
							this.setState({showSuccess:false,previewImage:'', recentPin:this.props.userPins[this.props.userPins.length-1]});
						} else {
							this.setState({showSuccess:false, previewImage:'', recentPin:this.props.userPins[this.props.userPins.length-1]})
						}
					},3000)
				})
			})

		} else {
			this.setState({showError:true})
		}
	}

	renderPins() {
		if(this.props.userPins.length === 0 ) {
			return (
			<PinBox text={'Pins'} bg={''}>
				<Link to={`/${parsedEmail(this.props.userProfile.email)}/pins`}>
					<IconWrapper><span className="fa fa-space-shuttle" /></IconWrapper>
				</Link>
			</PinBox>
			)
		} else {
			return (
			 	<PinBox
					text={'Pins'}
					isLoading={this.state.isLoading}
					onLoad={() => this.setState({isLoading:false})}
					bg={this.state.recentPin === undefined || this.state.recentPin.pinURL === null ? '' : this.state.recentPin.pinURL}>
					<Link to={`/${parsedEmail(this.props.userProfile.email)}/pins`}>
						<IconWrapper><span className="fa fa-space-shuttle" /></IconWrapper>
					</Link>
				</PinBox>
			)
		}
	}

	renderSavedPins() {
		let email = parsedEmail(this.props.authInfo.email);
		if(this.state.recentSavedPin.length === 0 || this.state.recentSavedPin === -1) {
			return (
				<Link to={`/${email}/saved`} style={styles.linkStyle}>
					<PinBox text={'Saved pins'}>
							<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</PinBox>
				</Link>
			)
		} else {
			return (
			 	<PinBox
					text={'Saved Pins'}
					isLoading={this.state.isLoading}
					onLoad={() => this.setState({isLoading:false})}
					bg={this.state.recentSavedPin === undefined || this.state.recentSavedPin.pinURL === null ? '' : this.state.recentSavedPin.pinURL}>
					<Link to={`/${email}/saved`}>
						<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</Link>
				</PinBox>
			)
		}
	}

	componentWillMount() {
		getSavedPins(res => {
			setTimeout(() => {
				this.setState({
					recentSavedPin: res[res.length - 1],
					recentPin:this.props.userPins[this.props.userPins.length-1]
				})
			},500)
		});

	}

	render() {
		//In Main Page Template is being passed the userProfile
		let {first_name,last_name,email,desc,avatarURL} = this.props.userProfile;
		let emailName = parsedEmail(email)
		let userProfile = {first_name,last_name,email:emailName,avatarURL,desc};


		return (
			<MainPageTemplate showPills={true} {...userProfile}>
					<PinBox
						text={'Create Pin'}
						showModule={() => this.setState({showCreateModule:true})}>
						<IconWrapper><span className="fa fa-plus"/></IconWrapper>
					</PinBox>

					{this.renderPins()}
					{this.renderSavedPins()}

				{
					this.state.showCreateModule
					? <CreateModule
							title="Create Pin"
							previewImage={this.state.previewImage}
							onChange={this.previewImage.bind(this)}
							onUrlChange={(e) => this.setState({urlLink:e.target.value})}
							onDescChange={(e) => this.setState({desc:e.target.value})}
					 		hideModule={() => this.setState({showCreateModule:false})}
							removeImage={() => this.setState({previewImage:''})}
							submitPin={this.sendUserPin.bind(this)}
							showError={this.state.showError} />
					: ''
				}
				{this.renderSuccess()}
			</MainPageTemplate>

		);
	}
}
let styles = {
	linkStyle: {
		textDecoration: 'none',
		color: '#efefef'
	}
}


function mapStateToProps(state) {
	return {
		userProfile: state.userProfile,
		authInfo: state.authInfo,
		userPins: state.userPins
	}
}

export default connect(mapStateToProps, { authListener })(UserPage);
