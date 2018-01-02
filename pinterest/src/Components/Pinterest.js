import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authListener } from '../actions/actionPin';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import AuthPage from './AuthPage/AuthPage';
import HomePage from './HomePage/HomePage';
import UserPage from './UserPage/UserPage';
import SettingsPage from './SettingsPage/SettingsPage';
import Wrapper from '../Styles/Wrapper';


class Pinterest extends Component {

	componentWillMount() {
		this.props.authListener();
	}

	render() {
		const PrivateRoute = ({component:Component, ...args}) => (
			<Route {...args} render={ (props) => (
				this.props.isAuthenticated
				? <div>
						<NavBar />
						<Wrapper><Component {...props} /></Wrapper>
					</div>
				: <Redirect to={{
						pathname: '/login',
						state: props.location
					 }} />
			)} />
		)
		return (
			<Router>
				<div>
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
