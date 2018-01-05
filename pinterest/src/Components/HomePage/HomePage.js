import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../actions/actionPin';
import Masonry from 'react-masonry-component';
import PinItem from './SubComponent/PinItem';
import { Container } from '../Common';

class HomePage extends Component {

	render() {
		return (
			<div style={{marginTop:'20px'}}>
				<Container>
					<Masonry className="my-gallery-class">
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
					</Masonry>
				</Container>
			</div>
		);
	}
}

export default connect(null, { userSignOut })(HomePage);
