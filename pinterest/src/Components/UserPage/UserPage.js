import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserPin } from '../../actions/actionPin';
import { Link } from 'react-router-dom';
import MainPageTemplate from './SubComponents/MainPageTemplate';
import PinBox from './SubComponents/PinBox';
import IconWrapper from './Styles/IconWrapper';
import { CreateModule } from '../Common';
import moment from 'moment';
import CheckMark from '../SVG/CheckMark';

class UserPage extends Component {
	constructor() {
		super();
		this.state = {
			showCreateModule: false,
			showSuccess: false,
			showError: false,
			previewImage: '',
			userPinPic: '',
			desc: '',
			urlLink: ''
		}
	}

	parsedEmail() {
		const { email } = this.props.userProfile;
		if(email !== undefined) {
			let parsedEmail = email.split('@')[0];
			return parsedEmail
		} else {
			return '';
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
			? <CheckMark successText="Sweet pin posted!"/>
			: ''
		)
	}

	sendUserPin() {
		let fullDate = moment()._d;
		let {userPinPic, desc} = this.state;
		let { sendUserPin } = this.props;
		let { userId } = this.props.authInfo;
		if(userPinPic !== ''){
			this.setState({showCreateModule:false}, () => {
				sendUserPin(userId, fullDate, userPinPic, desc);
				this.setState({showSuccess:true}, () => {
					setTimeout(()=>{
						this.setState({showSuccess:false,previewImage:''});
					},2000)
				})
			})

		} else {
			this.setState({showError:true})
		}
	}


	render() {
		return (
			<MainPageTemplate>
					<PinBox
						text={'Create Pin'}
						showModule={() => this.setState({showCreateModule:true})}>
						<IconWrapper><span className="fa fa-plus"/></IconWrapper>
					</PinBox>

					<PinBox text={'Pins'}>
						<Link to={`/${this.parsedEmail()}/pins`}>
							<IconWrapper><span className="fa fa-space-shuttle" /></IconWrapper>
						</Link>
					</PinBox>

					<PinBox text={'Saved pins'}>
						<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</PinBox>
				{
					this.state.showCreateModule
					? <CreateModule
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


function mapStateToProps(state) {
	return {
		userProfile: state.userProfile,
		authInfo: state.authInfo
	}
}

export default connect(mapStateToProps, { sendUserPin })(UserPage);
