import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingContainer from './Styles/SettingContainer';
import AccountSection from './AccountSection';
import SideBarSection from './SideBarSection';

class SettingsPage extends Component {

	render() {

		const { first_name, last_name, avatarURL, email } = this.props.userProfile;
		return (
			<SettingContainer>
				<AccountSection
					 	avatarURL={avatarURL}
						firstName={first_name}
						lastName={last_name}
						email={email} />

			</SettingContainer>
		);
	}
}

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile
	}
}

export default connect(mapStateToProps,null)(SettingsPage);
