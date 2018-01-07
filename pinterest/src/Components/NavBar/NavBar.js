import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../actions/actionPin';
import NavContainer from './Styles/NavContainer';
import LogoItem from './LogoItem';
import NavItems from './SubComponent/NavItems';
import './Styles/search.css';

class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			isSetting: false,
			avatarURL: ''
		};
	}

	parseEmail() {
		let email = this.props.userProfile.email;
		if(email !== undefined) {
			let parseEmail = email.split('@')[0];
			return parseEmail;
		} else {
			return 'user'
		}
	}

	signOut() {
		this.props.userSignOut()
	}

	render() {
		const { first_name, avatarURL,email } = this.props.userProfile;
		return (
			<div>
				<NavContainer>
					<LogoItem />
					<NavItems
							avatarURL={avatarURL}
							accountName={first_name}
							email={this.parseEmail()}
							isSetting={this.state.isSetting}
							showDropdown={() => this.setState({isSetting:!this.state.isSetting})}
							signOut={this.signOut.bind(this)}/>
				</NavContainer>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile
	}
}

export default connect(mapStateToProps, { userSignOut })(NavBar);
