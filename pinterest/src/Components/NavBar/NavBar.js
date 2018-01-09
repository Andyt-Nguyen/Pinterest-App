import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import { userSignOut } from '../../actions/actionPin';
import NavContainer from './Styles/NavContainer';
import LogoItem from './LogoItem';
import NavItems from './SubComponent/NavItems';
import { ModuleWrapper, ModuleContainer } from '../Common';
import RocketGif from '../SVG/RocketGif';

import './Styles/search.css';

class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			isSetting: false,
			avatarURL: '',
			showLoader: false
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
		this.setState({showLoader:true}, () => {
			setTimeout(() => {
				this.setState({showLoader:false});
				this.props.userSignOut();
			},3000)
		})

	}

	render() {
		const { first_name, avatarURL,email } = this.props.userProfile;
		return (
			<div>
			{
					this.state.showLoader
				? <ModuleContainer position="flex-start" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
						<ModuleWrapper>
						<header style={styles.header}>
							<SocialIcon network="pinterest" />
						</header>
						<h1 style={{fontFamily:'Quicksand'}}>{`Ok we are signing you out`}</h1>
							<RocketGif />
						</ModuleWrapper>
					</ModuleContainer>
				: ''
			}

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


const styles = {
	header: {
		width:'100%',
		background: '#efefef',
		textAlign: 'center'
	}
}

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile
	}
}

export default connect(mapStateToProps, { userSignOut })(NavBar);
