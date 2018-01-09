import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getIndividualPin } from '../../actions/actionPin';
import DisplayContainer from './Styles/DisplayContainer';
import DisplayWrapper from './Styles/DisplayWrapper';
import Btn from './Styles/Btn';
import { Avatar } from '../Common';
import UserInfo from './SubComponents/UserInfo';
import HeaderBtns from './SubComponents/HeaderBtns';
import MainPic from './SubComponents/MainPic';

class DisplayPin extends Component {
	constructor() {
		super();
		this.state = {
			uid: '',
			avatarURL: '',
			pinURL: '',
			firstName: '',
			lastName: '',
			desc: ''
		}
	}

	goBackToPreviousPage() {
		this.props.history.goBack();
	}

	componentWillMount() {
		const { pinId } = this.props.match.params;
		getIndividualPin(pinId, res =>{
			this.setState({
				avatarURL: res.avatarURL,
				pinURL: res.pinURL,
				firstName: res.first_name,
				lastName: res.last_name,
				desc: res.desc,
				uid: res.uid
			})
		})
	}

	render() {
		return (
			<DisplayContainer>
				<DisplayWrapper>

					<HeaderBtns goBack={this.goBackToPreviousPage.bind(this)}/>

					<MainPic pinURL={this.state.pinURL}/>

					<UserInfo
							uid={this.state.uid}
							avatarURL={this.state.avatarURL}
							firstName={this.state.firstName}
							lastName={this.state.lastName}
							des={this.state.desc} />

				</DisplayWrapper>
			</DisplayContainer>
		);
	}
}

export default DisplayPin;



// avatarURL
// firstName
// lastName}
// desc}</p>
