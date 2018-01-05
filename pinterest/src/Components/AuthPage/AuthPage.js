import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	createUser,
	userSignInWithGoogle,
	userSignInEmail ,
	authListener,
	userSignOut } from '../../actions/actionPin';
import { Redirect } from 'react-router-dom';
import SignIn from './SubComponent/SignIn';
import weather from './Styles/weather.png';
import food from './Styles/food.png';

class AuthPage extends Component {
	constructor() {
		super();
		this.state = {
			showEmail: true,
			signUp: true,
			email: '',
			password: ''
		};
	}

	handleSignInComp() {
		this.setState({signUp:!this.state.signUp});
	}

	onTextChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({[name]:value});
	}

	createUserWithEmail() {
		const { email, password } = this.state;
		this.props.createUser(email,password);
	}

	handleSignInUser() {
		const { email, password } = this.state;
		this.props.userSignInEmail(email,password);
	}


	handleSignWithGoogle() {
		this.props.userSignInWithGoogle();
	}

	signOut() {
		this.props.userSignOut();
	}

	render() {
		// const { from } = this.props.location.state || { from: { pathname:'/'}};
		if(this.props.isAuthenticated) {
			return (<Redirect to={'/'}/>)
		}

		return (
			<div>
			{this.state.signUp
				?<SignIn
						text={"Sign Up"}
						showError={this.props.isErrorSignUp}
						wallpaper={weather}
						goToLogin={this.handleSignInComp.bind(this)}
						onTextChange={this.onTextChange.bind(this)}
						createUser={this.createUserWithEmail.bind(this)}
						signWithGoogle={this.handleSignWithGoogle.bind(this)}
						showEmail={this.state.showEmail}
						ph={"Create Password"}/>
				: <SignIn
						text={"Login"}
						wallpaper={food}
						showError={this.props.isErrorSignIn}
						goToLogin={this.handleSignInComp.bind(this)}
						onTextChange={this.onTextChange.bind(this)}
						createUser={this.handleSignInUser.bind(this)}
						signWithGoogle={this.handleSignWithGoogle.bind(this)}
						showEmail={!this.state.showEmail}
						ph={"Password"}/>
			}
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		isAuthenticated: state.isAuthenticated,
		isErrorSignUp: state.isErrorSignUp,
		isErrorSignIn: state.isErrorSignIn
	}
}


export default connect(mapStateToProps, { createUser, userSignInWithGoogle, authListener, userSignInEmail, userSignOut })(AuthPage);
