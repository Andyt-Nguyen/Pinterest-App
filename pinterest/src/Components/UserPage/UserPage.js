import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserPin } from '../../actions/actionPin';
import HeaderSection from './SubComponents/HeaderSection';
import PinBox from './SubComponents/PinBox';
import Wrapper from './Styles/Wrapper';
import PinContainer from './Styles/PinContainer';
import Plus from './Styles/Plus';
import { CreateModule } from '../Common';
import moment from 'moment';

class UserPage extends Component {
	constructor() {
		super();
		this.state = {
			showCreateModule: false,
			userPinPic: '',
		}
	}

	previewImage(e) {
		this.setState({userPinPic:e.target.files[0]}, () => {
			let viewFile = this.state.userPinPic;
			let reader = new FileReader();
			let url = reader.readAsDataURL(viewFile);
			reader.onloadend = e => {
				this.setState({userPinPic: reader.result});
			}
		});
	}

	sendUserPin() {
		// '123','1/02/2018',this.state.file[0],'This is a description'
		this.props.sendUserPin()
	}


	render() {
		let fullDate = moment()._d;
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
					<PinBox
						text={'Create Pin'}
						showModule={() => this.setState({showCreateModule:true})}>
						<Plus className="fa fa-plus" />
					</PinBox>

					<PinBox text={'Pins'}>
						<Plus className="fa fa-space-shuttle" />
					</PinBox>
				</PinContainer>
				{
					this.state.showCreateModule
					? <CreateModule
							userPinPic={this.state.userPinPic}
							onChange={this.previewImage.bind(this)}
					 		hideModule={() => this.setState({showCreateModule:false})}/>
					: ''
				}

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

export default connect(mapStateToProps, { sendUserPin })(UserPage);
