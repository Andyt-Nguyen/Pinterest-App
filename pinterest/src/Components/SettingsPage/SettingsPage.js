import React, { Component } from 'react';
import SettingContainer from './Styles/SettingContainer';
import SettingLayout from './Styles/SettingLayout';
import AccountSection from './AccountSection';
import SideBarSection from './SideBarSection';

class SettingsPage extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<SettingContainer>
				<SettingLayout>
					<SideBarSection />
					<AccountSection />
				</SettingLayout>
			</SettingContainer>
		);
	}
}


export default SettingsPage;
