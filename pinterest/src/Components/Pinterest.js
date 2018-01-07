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
import Module from './Module/Module';
import AuthPage from './AuthPage/AuthPage';
import HomePage from './HomePage/HomePage';
import UserPage from './UserPage/UserPage';
import PinPage from './UserPage/PinPage';
import SettingsPage from './SettingsPage/SettingsPage';



class Pinterest extends Component {

	componentWillMount() {
			this.props.authListener();
	}

	render() {
		const PrivateRoute = ({component:Component, ...args}) => (
			<Route {...args} render={ (props) => (
				this.props.isAuthenticated
				? <div style={{position:'relative'}}>
						<Module />
						<NavBar />
						<Component {...props} />
					</div>
				: <Redirect to={{
						pathname: '/login',
						state: {from: props.location}
					 }} />
			)} />
		)
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/login" component={AuthPage} />
						<PrivateRoute path="/settings" component={SettingsPage} />
						<PrivateRoute path="/:email/pins" component={PinPage} />
						<PrivateRoute path="/:email" component={UserPage} />
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
