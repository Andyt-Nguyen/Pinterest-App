import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../actions/actionPin';
import NavContainer from './Styles/NavContainer';
import LogoItem from './LogoItem';
import NavItems from './NavItems';
import './Styles/search.css';

class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			isSetting: false
		};
	}

	signOut() {
		this.props.userSignOut()
	}

	render() {
		const { first_name } = this.props.userProfile;
		return (
			<div>
				<NavContainer>
					<LogoItem />
					<NavItems
							account={first_name}
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
