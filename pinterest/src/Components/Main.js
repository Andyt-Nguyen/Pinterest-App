import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './AuthPage/AuthPage';
import HomePage from './HomePage/HomePage';
import UserPage from './UserPage/UserPage';
import SettingsPage from './SettingsPage/SettingsPage';

const Main = () => (
	<div>
		<Switch>
			<Route exact path="/login" component={AuthPage} />
			<Route exact path="/" component={HomePage} />
			<Route exact path="/user" component={UserPage} />
			<Route exact path="/settings" component={SettingsPage} />
		</Switch>
	</div>
);

export default Main;
