import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authListener, getPins } from '../actions/actionPin';
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
import SavedPinPage from './UserPage/SavedPinPage';
import OtherUser from './UserPage/OtherUser';
import PinPage from './UserPage/PinPage';
import SettingsPage from './SettingsPage/SettingsPage';
import DisplayPinPage from './DisplayPinPage/DisplayPinPage';


class Pinterest extends Component {
	constructor() {
		super();
		this.state = {
			showLogin: false
		}
	}

	componentWillMount() {
			this.props.getPins()
	}

	render() {
		this.props.authListener();
		const PrivateRoute = ({component:Component, ...args}) => (
			<Route {...args} render={ (props) => (
				this.props.isAuthenticated
				? <div style={{position:'relative'}}>
						<Module />
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
						<PrivateRoute path="/pin/:pinId" component={DisplayPinPage} />
						<PrivateRoute path="/user/:userId/:pinId" component={DisplayPinPage} />
						<PrivateRoute path="/user/:email" component={OtherUser} />
						<PrivateRoute path="/:email/pins" component={PinPage} />
						<PrivateRoute path="/:email/saved/:pinId" component={DisplayPinPage} />
						<PrivateRoute path="/:email/saved" component={SavedPinPage} />
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

export default connect(mapStateToProps, { authListener, getPins })(Pinterest);
