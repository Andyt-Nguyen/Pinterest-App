import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSignOut, getPins } from '../../actions/actionPin';
import Masonry from 'react-masonry-component';
import NavBar from '../NavBar/NavBar';
import PinItem from './SubComponent/PinItem';
import { Container, DisplayPin } from '../Common';

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			isSearched: '',
			pins: [],
			showLoader: true
		}
	}

	handleImageLoading() {
		setTimeout(() => {
			this.setState({showLoader:false})
		},1000)
	}

	renderPins() {
		let pins = this.props.allPins.map( pin =>
			<Link key={pin.id} to={`pin/${pin.id}`} style={styles.linkStyle}>
			<PinItem
					showLoader={this.state.showLoader}
					src={pin.pinURL} desc={pin.desc}
					loading={this.handleImageLoading.bind(this)} />
			</Link>
		);
		return pins;
	}

	renderSearchedPins() {
		let { allPins } = this.props;
		let { isSearched } = this.state;
		let filteredPins = allPins.filter( pin =>
			pin.first_name.toLowerCase().indexOf(isSearched.toLowerCase()) > -1 ||
			pin.last_name.toLowerCase().indexOf(isSearched.toLowerCase()) > -1 ||
			pin.desc.toLowerCase().indexOf(isSearched.toLowerCase()) > -1 );
		let pins = filteredPins.map( pin =>
			<Link key={pin.id} to={`pin/${pin.id}`} style={styles.linkStyle}>
			<PinItem
					showLoader={this.state.showLoader}
					src={pin.pinURL} desc={pin.desc}
					loading={this.handleImageLoading.bind(this)} />
			</Link>
		);
		return pins;
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
		return (
				<div>
					<NavBar showSearch={true} onChange={(e) => this.setState({isSearched:e.target.value})} />
					<div style={{marginTop:'20px'}}>
						<Container>
							<Masonry className="my-gallery-class">
								{
									this.state.isSearched === ''
									? this.renderPins()
									: this.renderSearchedPins()
								}
							</Masonry>
						</Container>
					</div>
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
