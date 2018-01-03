import React, { Component } from 'react';
import ModuleWrapper from './Style/ModuleWrapper';
import ModuleContainer from './Style/ModuleContainer';
import Header from './Style/Header';
import { SocialIcon } from 'react-social-icons';
import { RadioInput, RadioWrapper, Button } from '../Common';

class Module extends Component {
	constructor() {
		super();
		this.state = {
			first_name: '',
			last_name: '',
			gender: ''
		};
	}

	render() {
		return (
			<ModuleContainer isHide={this.props.isHide}>
			<ModuleWrapper>
				<Header>
					<SocialIcon network="pinterest" />
				</Header>
					<div>
						<h1>Account Basics</h1>
						<input
								style={styles.inputStyle}
								type="text"
								onChange={(e) => this.setState({first_name:e.target.value})}
								placeholder="Name" />
						<input
								style={styles.inputStyle}
								type="text"
								onChange={(e) => this.setState({last_name:e.target.value})}
								placeholder="Last Name" />
						<RadioWrapper>
							<RadioInput gender="male" label="Male" name="gender" />
							<RadioInput gender="female" label="Female" name="gender" />
							<RadioInput gender="nonBinary" label="Non-Binary" name="gender" />
						</RadioWrapper>
					</div>

				<Button danger>Submit</Button>

				<Header>
					<SocialIcon network="pinterest" />
				</Header>
			</ModuleWrapper>
			</ModuleContainer>
		);
	}
}

const styles = {
	inputStyle: {
		width: '100%',
		fontSize: '20px',
		borderRadius: '5px',
		margin: '3px 0',
		padding: '5px',
		border: '2px solid #efefef',
		display: 'block'
	}
};
export default Module;
