import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserPin } from '../../actions/actionPin';
import HeaderSection from './SubComponents/HeaderSection';
import PinBox from './SubComponents/PinBox';
import Wrapper from './Styles/Wrapper';
import PinContainer from './Styles/PinContainer';
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
		const { first_name, last_name, avatarURL, desc } = this.props.userProfile;
		return (
			<Wrapper>
				<HeaderSection
					avatarURL={avatarURL}
					firstName={first_name}
					lastName={last_name}
					desc={desc} />

				<div style={styles.pinStyle}>
					<button style={styles.btnPill}>Home</button>
					<button style={styles.btnPill}>Pins</button>
					<button style={styles.btnPill}>Saved Pins</button>
				</div>

				<PinContainer>
					<PinBox
						text={'Create Pin'}
						showModule={() => this.setState({showCreateModule:true})}>
						<IconWrapper><span className="fa fa-plus"/></IconWrapper>
					</PinBox>

					<PinBox text={'Pins'}>
						<IconWrapper><span className="fa fa-space-shuttle" /></IconWrapper>
					</PinBox>

					<PinBox text={'Saved pins'}>
						<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</PinBox>
				</PinContainer>
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

			</Wrapper>

		);
	}
}

const styles = {
	pinStyle: {
		display: 'flex',
		width: '350px',
		marginLeft: '10%',
		justifyContent: 'space-between',
		marginBottom: '20px'
	},

	btnPill: {
		border: 'none',
		background:'#efefef',
		borderRadius: '30px',
		padding: '10px',
		fontWeight: 700,
		color:'#555555',
		fontSize: '18px'
	},
}

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile,
		authInfo: state.authInfo
	}
}

export default connect(mapStateToProps, { sendUserPin })(UserPage);
