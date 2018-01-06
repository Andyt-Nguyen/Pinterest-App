import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderSection from './SubComponents/HeaderSection';
import PinBox from './SubComponents/PinBox';
import Wrapper from './Styles/Wrapper';
import PinContainer from './Styles/PinContainer';
import Plus from './Styles/Plus';

class UserPage extends Component {
	render() {
		const { first_name, last_name, avatarURL, desc } = this.props.userProfile;
		return (
			<Wrapper>
				<HeaderSection
					avatarURL={avatarURL}
					firstName={first_name}
					lastName={last_name}
					desc={desc} />

				<div style={styles.pinStyle}>
					<button style={styles.btnPill}>Pins</button>
				</div>

				<PinContainer>
					<PinBox text={'Create Pin'}>
						<Plus className="fa fa-plus"></Plus>
					</PinBox>

					<PinBox text={'Pins'}>
						<Plus className="fa fa-space-shuttle"></Plus>
					</PinBox>
				</PinContainer>


			</Wrapper>

		);
	}
}

const styles = {
	pinStyle: {
		display: 'flex',
		justifyContent: 'center'
	},

	btnPill: {
		border: 'none',
		background:'#efefef',
		borderRadius: '30px',
		padding: '15px',
		fontWeight: 700,
		color:'#555555',
		fontSize: '18px'
	},

}

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile
	}
}

export default connect(mapStateToProps, null)(UserPage);
