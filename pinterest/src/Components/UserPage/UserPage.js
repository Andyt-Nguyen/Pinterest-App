import React, { Component } from 'react';
import Wrapper from './Styles/Wrapper';
import HeaderSection from './HeaderSection';
import PinBox from './PinBox';
import PinContainer from './Styles/PinContainer';

class UserPage extends Component {
	render() {
		return (
			<Wrapper>
				<HeaderSection />

				<div style={styles.pinStyle}>
					<button style={styles.btnPill}>Pins</button>
				</div>

				<PinContainer>
					<PinBox text={'Create Pin'}>
						<span className="fa fa-plus" style={styles.pinPlus}></span>
					</PinBox>

					<PinBox text={'Pins'}>
						<span className="fa fa-plus" style={styles.pinPlus}></span>
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


	pinPlus: {
		color: 'white',
		borderRadius: '50%',
		background: 'crimson',
		border: 'none',
		fontSize: '30px',
		padding: '10px',
		paddingLeft: '15px',
		paddingRight: '15px',
	}
}

export default UserPage;
