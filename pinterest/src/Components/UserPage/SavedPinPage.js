import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSavedPins } from '../../actions/actionPin';
import MainPageTemplate from './SubComponents/MainPageTemplate';
import PinBox from './SubComponents/PinBox';
import IconWrapper from './Styles/IconWrapper';

class SavedPinPage extends Component {
	constructor() {
		super();
		this.state = {
			pins:[]
		};
	}

	renderPins() {
		let { email } = this.props.userProfile;
		let parsedEmail = () => {
			if(email !== undefined) {
				let parsedEmail = email.split('@')[0];
				return parsedEmail;
			} else {
				return '';
			}
		}
		if(this.state.pins.length === 0) {
			return (
				<PinBox>
					<h1 style={{color:'#ffffff'}}>
					<span className="fa fa-frown-o"></span>
					You have saved pins</h1>
				</PinBox>
			)
		} else {
			let pins = this.state.pins.map( pin =>
				<Link key={pin.otherUid} to={`/${parsedEmail()}/saved/${pin.otherUid}`} style={styles.linkStyle}>
					<PinBox
							text={pin.desc} bg={pin.pinURL}
							isLoading={this.state.isLoading}
							onLoad={() => this.setState({isLoading:false})}
							showModule={() => this.setState({previewImage:pin.pinURL, desc:pin.desc, urlLink:pin.urlLink, showCreateModule:true, pinId:pin.id})}>
						<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</PinBox>
				</Link>
			);
			return pins;
		}
	}

	componentWillMount() {
		setTimeout(() => {
			getSavedPins(res => {
				this.setState({pins:res})
			});
		},2000)
	}

	render() {
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
			</MainPageTemplate>
		);
	}
}

const styles = {
	linkStyle: {
		textDecoration: 'none',
		color: '#efefef'
	}
}

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile,
		authInfo: state.authInfo
	}
}

export default connect(mapStateToProps, null)(SavedPinPage);
