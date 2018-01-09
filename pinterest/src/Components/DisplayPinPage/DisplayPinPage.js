import React from 'react';
import { Link } from 'react-router-dom';
import DisplayContainer from './Styles/DisplayContainer';
import Btn from './Styles/Btn';
import { Avatar } from '../Common';

const DisplayPin = () => (
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
				<img src="http://placehold.it/300x600" style={{borderRadius:'5px'}}/>
			</div>





			<div style={{alignSelf:'flex-start', marginTop:'10px'}}>
				<div style={{display:'flex', alignItems:'center'}}>
					<Avatar cPic={'https://placehold.it/200'} style={{width:'75px',height:'75px'}}/>
					<div style={{marginLeft:'10px', border:'2px solid red'}}>
						<p style={{fontSize:'15px'}}>Submitted by</p>
						<p style={{color:'#555555', fontWeight:700, fontSize:'18px'}}>Andrew Nguyen</p>
					</div>
				</div>

				<div style={{width:'100%', borderTop:'1px solid #efefef', borderRadius:'5px', margin:'15px 0'}}></div>

				<div style={{width:'500px', marginBottom:'20px'}}>
					<p style={{fontSize:'15px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industrys standard dummy text ever
					since the 1500s,
					since the 1500s,
					since the 1500s,
					since the 1500s,
					since the 1500s,
					since the 1500s,
					</p>
				</div>

			</div>

		</div>

	</DisplayContainer>
);

const styles = {
	linkStyle: {
		textDecoration: 'none',
		color:'white'
	}
}


export default DisplayPin;
