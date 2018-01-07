import React, { Component } from 'react';
import { connect } from 'react-redux';
import PinBox from './SubComponents/PinBox';
import IconWrapper from './Styles/IconWrapper';
import MainPageTemplate from './SubComponents/MainPageTemplate';

class PinPage extends Component {
	render() {
		return (
			<MainPageTemplate>
					<PinBox text={'Saved pins'}>
						<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</PinBox>
					<PinBox text={'Saved pins'}>
						<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</PinBox>
					<PinBox text={'Saved pins'}>
						<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</PinBox>
					<PinBox text={'Saved pins'}>
						<IconWrapper><span className="fa fa-heart"/></IconWrapper>
					</PinBox>
			</MainPageTemplate>
		);
	}
}

function mapStateToProps(state) {
	return {
		userProfile: state.userProfile
	}
};

export default connect(mapStateToProps, null)(PinPage);
