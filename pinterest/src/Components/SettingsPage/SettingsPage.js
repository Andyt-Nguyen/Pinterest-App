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

const styles = {
	container: {
		position: 'relative',
		cursor: 'pointer'
	},

	containerInput: {
		position: 'absolute',
		display: 'none'
	},

	customRadio: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '25px',
		width: '25px',
		background: 'red',
		borderRadius: '50%'
	},

}

export default SettingsPage;
