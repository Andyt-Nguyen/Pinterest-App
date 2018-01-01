import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignInWithGoogle, authListener, userSignOut } from '../../actions/actionPin';
import { Redirect } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import AuthContainer from './Styles/AuthContainer';
import AuthBox from './Styles/AuthBox';
import InputContainer from './Styles/InputContainer';
import Input from './Styles/Input';
import Button from './Styles/Button';
import ThirdPartyContainer from './Styles/ThirdPartyContainer';
import SocialText from './Styles/SocialText';
import googleLogo from './google_dark2.svg';

class AuthPage extends Component {
	constructor() {
		super();
		this.state = {loggin:false};
	}

	signWithGoogle() {
		this.props.userSignInWithGoogle();
	}

	signOut() {
		this.props.userSignOut();
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname:'/'}};
		if(this.props.isAuthenticated) {
			return (<Redirect to={'/'}/>)
		}
		return (
			<AuthContainer>
				<AuthBox>
				
					<SocialIcon network="pinterest" style={styles.pinterestIcon} />
					<h1 style={styles.greyText}>Welcome to Pinterest</h1>

					<InputContainer>
						<Input type="text" placeholder="Email" />
						<Input type="text" placeholder="Create Password" />
						<Button>Continue</Button>
						<p style={{padding: '15px', color:'#555555', fontWeight:700, fontSize:'13px' }}>OR</p>

						<ThirdPartyContainer google onClick={this.signWithGoogle.bind(this)}>
							<img src={googleLogo}/>
							<SocialText>Continue With Google</SocialText>
						</ThirdPartyContainer>

						<ThirdPartyContainer facebook>
							<SocialIcon network="facebook" color="white" style={styles.facebookIcon} />
							<SocialText>Continue With Facebook</SocialText>
						</ThirdPartyContainer>
					</InputContainer>

				</AuthBox>
			</AuthContainer>
		);
	}
}

const styles = {
	pinterestIcon: {
		height: 80,
		width: 80,
		marginBottom: '10px'
	},

	facebookIcon: {
		width:'45px',
		height: '45px'
	},

	greyText: {
		color:'#555555'
	}

}

function mapStateToProps(state) {
	return {
		isAuthenticated: state.isAuthenticated
	}
}

export default connect(mapStateToProps, { userSignInWithGoogle, authListener, userSignOut })(AuthPage);
