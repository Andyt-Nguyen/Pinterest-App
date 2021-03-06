import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserPin, deleteUserPin } from '../../actions/actionPin';
import { SyncLoader } from 'react-spinners';
import PinBox from './SubComponents/PinBox';
import IconWrapper from './Styles/IconWrapper';
import MainPageTemplate from './SubComponents/MainPageTemplate';
import { CreateModule } from '../Common';
import moment from 'moment';
import CheckMark from '../SVG/CheckMark';

class PinPage extends Component {
	constructor() {
		super();
		this.state = {
			pins: [],
			pinId: '',
			previewImage: '',
			userPinPic: '',
			desc: '',
			urlLink:'',
			showCreateModule:false,
			userPinPic: '',
			showDelete:true,
			showSuccess: false,
			showMark: false,
			isLoading: true
		}
	}

	renderPins() {
		if(this.state.pins.length === 0) {
			return (
				<PinBox>
					<h1 style={{color:'#ffffff'}}>
					<span className="fa fa-frown-o"></span>
					You have no pins</h1>
				</PinBox>
			)
		} else {
			let pins = this.state.pins.map( pin =>
				<PinBox
						key={pin.id} text={pin.desc} bg={pin.pinURL}
						isLoading={this.state.isLoading}
						onLoad={()=>this.setState({isLoading:false})}
						showModule={() => this.setState({previewImage:pin.pinURL, desc:pin.desc, urlLink:pin.urlLink, showCreateModule:true, pinId:pin.id})}>
				</PinBox>
			);
			return pins;
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

	updatePin() {
		let fullDate = moment()._d;
		let { first_name, last_name, avatarURL } = this.props.userProfile;
		let {userPinPic, desc, urlLink, pinId ,previewImage} = this.state;
		let { userId } = this.props.authInfo;
		if(userPinPic !== ''){
			this.setState({showCreateModule:false}, () => {
				updateUserPin(userId, pinId, fullDate, userPinPic, desc, urlLink, this.state.previewImage,first_name,last_name,avatarURL);
				this.setState({showSuccess:true}, () => {
					setTimeout(()=>{
						this.setState({showSuccess:false, pins:this.props.userPins,userPinPic:''});
					},2000)
				})
			})

		} else {
			this.setState({showCreateModule:false}, () => {
				updateUserPin(userId, pinId, fullDate, userPinPic='', desc, urlLink, this.state.previewImage,first_name,last_name,avatarURL);
				this.setState({showSuccess:true}, () => {
					setTimeout(()=>{
						this.setState({showSuccess:false, pins:this.props.userPins});
					},1500)
				})
			})
		}
	}

	deletePin() {
		let { pinId } = this.state;
		let { userId } = this.props.authInfo;
		let urlAddress = this.props.match.params.email;
		this.setState({showMark:true,showCreateModule:false}, () => {
			setTimeout(() => {
				deleteUserPin(userId, pinId, urlAddress);
				this.props.history.push(`/${urlAddress}`)
			},2000)
		})
	}

	settingPinModule(previewImage,desc,urlLink) {
		this.setState({
			previewImage,
			desc,
			urlLink,
			showCreateModule:true,
			showError: false,
			userPinPic: ''
		})
	}

	componentWillMount() {
			this.setState({
				pins:this.props.userPins
			});
	}


	render() {
		//In Main Page Template is being passed the userProfile
		let {first_name,last_name,email,desc,avatarURL} = this.props.userProfile;
		let parsedEmail = () => {
			if(email !== undefined) {
				let parsedEmail = email.split('@')[0];
				return parsedEmail;
			} else {
				return '';
			}
		}
		let userProfile = {first_name,last_name,email:parsedEmail(),avatarURL,desc};
		return (
			<MainPageTemplate showPills={true} {...userProfile}>
				{this.renderPins()}

				{
					this.state.showMark
					?  <CheckMark color='red' successText="Pin Exterminated!"/>
					: ''}
				{

					this.state.showCreateModule !== false
					? <CreateModule
							title="Edit Pin"
							previewImage={this.state.previewImage}
							onChange={this.previewImage.bind(this)}
							onUrlChange={(e) => this.setState({urlLink:e.target.value})}
							urlVal={this.state.urlLink}
							onDescChange={(e) => this.setState({desc:e.target.value})}
							descVal={this.state.desc}
							hideModule={() => this.setState({showCreateModule:false})}
							removeImage={() => this.setState({previewImage:''})}
							submitPin={this.updatePin.bind(this)}
							showDelete={this.state.showDelete}
							onDelete={this.deletePin.bind(this)} />
					: ''
				}

			</MainPageTemplate>
		);
	}
}

function mapStateToProps(state) {
	return {
		authInfo: state.authInfo,
		userProfile: state.userProfile,
		userPins: state.userPins
	}
};

export default connect(mapStateToProps, null)(PinPage);
