import React, { Component } from 'react';
import ModuleWrapper from './Style/ModuleWrapper';
import ModuleContainer from './Style/ModuleContainer';
import Header from './Style/Header';
import { SocialIcon } from 'react-social-icons';
import { RadioInput, RadioWrapper, Button } from '../Common';
import Input from './Input';

class Module extends Component {
	static defaultProps = {
		gender: [
			{
				name:'male',
				label: 'Male'
			}, {
				name:'female',
				label: 'Female'
			}, {
				name: 'non_binary',
				label: 'Non Binary'
			}
		]
	}

	constructor() {
		super();
		this.state = {
			first_name: '',
			last_name: '',
			gender: ''
		};
	}


	render() {
		console.log(this.state);
		const radioInput = this.props.gender.map( sex =>
			<RadioInput
				key={sex.label}
				onChange={(e) => this.setState({gender:e.target.value})}
			 	gender={sex.name} label={sex.label} name="gender" />
		);
		return (
			<ModuleContainer isHide={this.props.isHide}>
				<ModuleWrapper>
					<Header>
						<SocialIcon network="pinterest" />
					</Header>

						<div>
							<h1>Account Basics</h1>

							<Input
									onTextChange={(e) => this.setState({first_name:e.target.value})}
									ph="Name" />
							<Input
									onTextChange={(e) => this.setState({last_name:e.target.value})}
									ph="Last Name" />

							<RadioWrapper>
								{radioInput}
							</RadioWrapper>
						</div>

					<Button danger>Submit</Button>
				</ModuleWrapper>
			</ModuleContainer>
		);
	}
}

export default Module;
