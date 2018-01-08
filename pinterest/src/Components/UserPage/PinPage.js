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
			showSuccess: false
		}
	}

	renderPins() {
		if(this.props.userPins.length === 0) {
			return (
				<h1 style={{color:'#555555'}}>
					<span className="fa fa-frown-o"></span>
					You have no pins</h1>
			)
		} else if(this.state.pins.length !== 0) {
			let pins = this.state.pins.map( pin =>
				<PinBox
						key={pin.id} text={pin.desc} bg={pin.pinURL}
						showModule={() => this.setState({previewImage:pin.pinURL, desc:pin.desc, urlLink:pin.urlLink, showCreateModule:true, pinId:pin.id})}>
					<IconWrapper><span className="fa fa-heart"/></IconWrapper>
				</PinBox>
			);
			return pins;
		} else {
			return (
				<PinBox>
						<SyncLoader color="#4285f4" />
				</PinBox>
			)
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
			? <CheckMark successText="Updated was successful!"/>
			: ''
		)
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
		let {userPinPic, desc, urlLink, pinId ,previewImage} = this.state;
		let { userId } = this.props.authInfo;
		if(userPinPic !== ''){
			this.setState({showCreateModule:false}, () => {
				updateUserPin(userId, pinId, fullDate, userPinPic, desc, urlLink, this.state.previewImage);
				this.setState({showSuccess:true}, () => {
					setTimeout(()=>{
						this.setState({showSuccess:false, pins:this.props.userPins,userPinPic:''});
					},1500)
				})
			})

		} else {
			this.setState({showCreateModule:false}, () => {
				updateUserPin(userId, pinId, fullDate, userPinPic='', desc, urlLink, this.state.previewImage);
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
		deleteUserPin(userId, pinId, () => this.setState({pins:this.props.userPins},() => {
			let urlAddress = this.props.match.params.email;
			this.props.history.push(`/${urlAddress}`);
		}))
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
		setTimeout(() => {
			this.setState({
				pins:this.props.userPins
			});
		},1000)
	}


	render() {

		return (
			<MainPageTemplate>
				{this.renderPins()}

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

				{this.renderSuccess()}

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
