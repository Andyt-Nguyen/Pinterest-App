import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSignOut, getPins } from '../../actions/actionPin';
import Masonry from 'react-masonry-component';
import PinItem from './SubComponent/PinItem';
import { Container, DisplayPin } from '../Common';

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			pins: [],
			showLoader: true
		}
	}

	handleImageLoading() {
		setTimeout(() => {
			this.setState({showLoader:false})
		},1000)
	}

	componentWillMount() {
		setTimeout(() => {
			this.setState({showLoader:false})
		},3000)
	}

	componentDidMount() {
		this.props.getPins()
	}


	render() {

		let pins = this.props.allPins.map( pin =>
			<Link key={pin.id} to={`pin/${pin.id}`} style={styles.linkStyle}>
			<PinItem
					showLoader={this.state.showLoader}
					src={pin.pinURL} desc={pin.desc}
					loading={this.handleImageLoading.bind(this)} />
			</Link>
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

const styles = {
	linkStyle: {
		textDecoration: 'none',
		color:'white'
	}
}

function mapStateToProps(state) {
	return {
		allPins: state.allPins
	}
}

export default connect(mapStateToProps, { userSignOut, getPins })(HomePage);
