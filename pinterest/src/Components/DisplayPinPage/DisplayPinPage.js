import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getIndividualPin } from '../../actions/actionPin';
import DisplayContainer from './Styles/DisplayContainer';
import Btn from './Styles/Btn';
import { Avatar } from '../Common';

class DisplayPin extends Component {
	constructor() {
		super();
		this.state = {
			avatarURL: '',
			pinURL: '',
			firstName: '',
			lastName: '',
			desc: ''
		}
	}

	componentWillMount() {
		const { id } = this.props.match.params;
		getIndividualPin(id, res =>{
			this.setState({
				avatarURL: res.avatarURL,
				pinURL: res.pinURL,
				firstName: res.first_name,
				lastName: res.last_name,
				desc: res.desc
			})
		})
	}

	render() {
		return (
			<DisplayContainer>
				<div style={{padding:'5px 30px', borderRadius:'5px', background:'white', margin:'30px', width: '500px'}}>


					<div style={{display:'flex', justifyContent:'space-between'}}>
						<Btn bg="dodgerblue">
							<Link to="/" style={styles.linkStyle}>
								<span className="fa fa-home" style={{color:'white', fontSize:'15px'}}></span>
								<span style={{color:'white', marginLeft:'5px'}}>Home</span>
							</Link>
						</Btn>

						<Btn bg="crimson">
							<Link to="/" style={styles.linkStyle}>
								<span className="fa fa-heart" style={{color:'white'}}></span>
								<span style={{color:'white', marginLeft:'5px'}}>Save</span>
							</Link>
						</Btn>
					</div>



					<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
						<img width="500px" src={this.state.pinURL} style={{borderRadius:'5px'}}/>
					</div>





					<div style={{alignSelf:'flex-start', marginTop:'10px'}}>
						<div style={{display:'flex', alignItems:'center'}}>
							<Avatar cPic={this.state.avatarURL} style={{width:'75px',height:'75px'}}/>
							<div style={{marginLeft:'10px'}}>
								<p style={{fontSize:'15px'}}>Submitted by</p>
								<p style={{color:'#555555', fontWeight:700, fontSize:'18px'}}>
									{this.state.firstName} {this.state.lastName}
								</p>
							</div>
						</div>

						<div style={{width:'100%', borderTop:'1px solid #efefef', borderRadius:'5px', margin:'15px 0'}}></div>

						<div style={{width:'500px', marginBottom:'20px'}}>
							<p style={{fontSize:'15px'}}>{this.state.desc}</p>
						</div>

					</div>

				</div>

			</DisplayContainer>
		);
	}
}

const styles = {
	linkStyle: {
		textDecoration: 'none',
		color:'white'
	}
}


export default DisplayPin;
