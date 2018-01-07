import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavPillWrapper from '../Styles/NavPillWrapper';
import PinPill from '../Styles/PinPill';
import HeaderSection from './HeaderSection';
import PinBox from './PinBox';
import Wrapper from '../Styles/Wrapper';
import PinContainer from '../Styles/PinContainer';
import IconWrapper from '../Styles/IconWrapper';
import { Link } from 'react-router-dom';

class MainPageTemplate extends Component {
	parseEmail() {
		const { email } = this.props.userProfile;
		if(email !== undefined) {
			let parsedEmail = email.split('@')[0];
			return parsedEmail;
		} else {
			return '';
		}
	}
	render() {
		const { first_name, last_name, avatarURL, desc } = this.props.userProfile;
		return (
			<Wrapper>
				<HeaderSection
					avatarURL={avatarURL}
					firstName={first_name}
					lastName={last_name}
					desc={desc} />

				<NavPillWrapper>
					<Link to={`/${this.parseEmail()}`} style={styles.linkStyle}>Home</Link>
					<Link to={`/${this.parseEmail()}/pins`} style={styles.linkStyle}>Pins</Link>
					<Link to="/" style={styles.linkStyle}>Saved Pins</Link>
				</NavPillWrapper>

				<PinContainer>
				{this.props.children}
				</PinContainer>

			</Wrapper>
		);
	}
}

const styles = {
	linkStyle: {
		border: 'none',
		background: '#efefef',
		borderRadius: '30px',
		padding: '10px',
		fontWeight: 700,
		color: '#555555',
		fontSize: '18px',
		textDecoration:'none'
	}
};

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile
	}
};

export default connect(mapStateToProps, null)(MainPageTemplate);
