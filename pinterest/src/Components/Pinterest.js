import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authListener } from '../actions/actionPin';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import AuthPage from './AuthPage/AuthPage';
import HomePage from './HomePage/HomePage';
import UserPage from './UserPage/UserPage';
import SettingsPage from './SettingsPage/SettingsPage';
import Wrapper from '../Styles/Wrapper';


class Pinterest extends Component {
	constructor() {
		super();
		this.state = {logging: false};
	}


	componentWillMount() {
		this.props.authListener();
	}


	render() {
		console.log(this.props.isAuthenticated);
		const auth = true;
		const PrivateRoute = ({component:Component, ...args}) => (
			<Route {...args} render={ (props) => (
				this.props.isAuthenticated
				? <Wrapper><Component {...props} /></Wrapper>
				: <Redirect to={{
						pathname: '/login',
						state: props.location
					 }} />
			)} />
		)
		return (
			<Router>
				<div>
				{this.props.isAuthenticated ?
				<NavBar/> :
				''
				}
					<Switch>
						<Route path="/login" component={AuthPage} />
						<PrivateRoute path="/user" component={UserPage} />
						<PrivateRoute path="/settings" component={SettingsPage} />
						<PrivateRoute path="/" component={HomePage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		isAuthenticated: state.isAuthenticated
	}
}

export default connect(mapStateToProps, { authListener })(Pinterest);
