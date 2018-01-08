import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignOut, getPins } from '../../actions/actionPin';
import Masonry from 'react-masonry-component';
import PinItem from './SubComponent/PinItem';
import { Container } from '../Common';

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			pins: []
		}
	}
	componentWillMount(){
		getPins( res => {
			this.setState({pins:res})
		});
	}
	render() {
		console.log(this.state);
		let pins = this.state.pins.map( pin =>
			<PinItem key={pin.id} src={pin.pinURL} desc={pin.desc} />
		);
		return (
			<div style={{marginTop:'20px'}}>
				<Container>
					<Masonry className="my-gallery-class">
						{pins}
					</Masonry>
				</Container>
			</div>
		);
	}
}

export default connect(null, { userSignOut })(HomePage);
