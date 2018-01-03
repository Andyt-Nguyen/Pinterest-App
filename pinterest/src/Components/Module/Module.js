import React, { Component } from 'react';
import ModuleWrapper from './Style/ModuleWrapper';
import ModuleContainer from './Style/ModuleContainer';
import { SocialIcon } from 'react-social-icons';
import ImageUpload from './ImageUpload';
import Header from './Style/Header';
import { RadioInput, RadioWrapper, Button } from '../Common';
import Input from './Input';

class Module extends Component {
	static defaultProps = {
		gender: [
			{
				type:'male',
				label: 'Male'
			}, {
				type:'female',
				label: 'Female'
			}, {
				type: 'non_binary',
				label: 'Non Binary'
			}
		]
	}

	constructor() {
		super();
		this.state = {
			avatarUrl: '',
			first_name: '',
			last_name: '',
			gender: ''
		};
	}


	render() {
		const radioInput = this.props.gender.map( sex =>
			<RadioInput
				key={sex.label}
				onChange={(e) => this.setState({gender:e.target.value})}
			 	gender={sex.type} label={sex.label} name="gender" />
		);
		return (
			<ModuleContainer isHide={this.props.isHide}>
				<ModuleWrapper>
					<Header>
						<SocialIcon network="pinterest" />
					</Header>

						<div style={{textAlign:'center'}}>
							<h1>Account Basics</h1>

							<ImageUpload
									src="https://placehold.it/150"
									onChange={(e) => this.setState({avatarUrl:e.target.files[0].name})} />

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
