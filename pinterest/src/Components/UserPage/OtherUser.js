import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUsersPins, getOtherUsersInfo } from '../../actions/actionPin';
import MainPageTemplate from './SubComponents/MainPageTemplate';
import PinBox from './SubComponents/PinBox';

class OtherUser extends Component {
	constructor() {
		super();
		this.state = {
			userInfo: {},
			userPins:[],
			isLoading: true
		};
	}

	renderUserPins() {
		let { userId } = this.props.match.params;
		let pins = this.state.userPins.map(pin =>
			<Link key={pin.id} to={`/user/${userId}/${pin.id}`} style={styles.linkStyle}>
				<PinBox
				 	text={pin.desc} bg={pin.pinURL}
					isLoading={this.state.isLoading}
					onLoad={() => this.setState({isLoading:false})} />
			</Link>
		);
		return pins
	}

	componentWillMount() {
		let { userId } = this.props.match.params;
		getUsersPins(userId, res => {
			this.setState({
				userPins: res
			})
		});

		getOtherUsersInfo(userId, userInfo => {
			this.setState({userInfo})
		})
	}

	render() {
		return (
			<MainPageTemplate showPills={false} {...this.state.userInfo}>
				{
					this.state.userPins.length !== 0
					?this.renderUserPins()
					:<PinBox>This user has no pins</PinBox>
				}
			</MainPageTemplate>
		);
	}
}


const styles = {
	linkStyle: {
		textDecoration: 'none',
	}
}
export default OtherUser;
