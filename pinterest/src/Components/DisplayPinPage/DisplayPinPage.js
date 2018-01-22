import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIndividualPin,saveUsersPin } from '../../actions/actionPin';
import DisplayContainer from './Styles/DisplayContainer';
import DisplayWrapper from './Styles/DisplayWrapper';
import Btn from './Styles/Btn';
import { Avatar } from '../Common';
import UserInfo from './SubComponents/UserInfo';
import HeaderBtns from './SubComponents/HeaderBtns';
import MainPic from './SubComponents/MainPic';
import { parsedEmail } from '../../functions/reusable';

class DisplayPin extends Component {
	constructor() {
		super();
		this.state = {
			otherUid: '',
			avatarURL: '',
			pinURL: '',
			firstName: '',
			lastName: '',
			desc: '',
			date: ''
		}
	}

	goBackToPreviousPage() {
		this.props.history.goBack();
	}

	savePin() {
		let { userId } = this.props.authInfo;
		let { otherUid, avatarURL, pinURL,firstName, lastName, desc, date } = this.state;
		saveUsersPin(userId, otherUid, avatarURL, pinURL,firstName, lastName, desc, date);
	}

	componentWillMount() {
		const { pinId } = this.props.match.params;
		getIndividualPin(pinId, res =>{
			this.setState({
				avatarURL: res.avatarURL,
				pinURL: res.pinURL,
				email: res.email,
				firstName: res.first_name,
				lastName: res.last_name,
				desc: res.desc,
				otherUid: pinId,
				date: res.date
			})
		});
	}

	render() {
		let { email } = this.props.authInfo;
		let newEmail = parsedEmail(email);
		return (
			<DisplayContainer>
				<DisplayWrapper>

					<HeaderBtns
						deletePin={this.props.location.pathname === `/${newEmail}/saved/${this.state.otherUid}`}
						savePin={this.savePin.bind(this)}
					 	goBack={this.goBackToPreviousPage.bind(this)}/>

					<MainPic pinURL={this.state.pinURL}/>

					<UserInfo
							uid={this.state.otherUid}
							pinEmail={this.state.email}
							avatarURL={this.state.avatarURL}
							firstName={this.state.firstName}
							lastName={this.state.lastName}
							des={this.state.desc} />

				</DisplayWrapper>
			</DisplayContainer>
		);
	}
}

function mapStateToProps(state) {
	return {
		authInfo: state.authInfo
	}
}

export default connect(mapStateToProps, null)(DisplayPin);
