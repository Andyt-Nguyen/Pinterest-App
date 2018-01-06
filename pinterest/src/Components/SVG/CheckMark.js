import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Styles/checkmark.css';

const CheckMark = () => (
	<div style={styles.successBox}>
		<div style={{width:'100%', background:'#efefef', height:'40px'}}>
			<SocialIcon network="pinterest" style={{width:'70px', height:'70px'}}/>
		</div>
		<div style={{display:'flex', justifyContent:'center',marginTop:'30px'}}>
		<svg className="checkmark-size" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
		<circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
		<polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
		</svg>
		</div>
		<div style={{textAlign:'center'}}>
			<h2 className="success">Awesome profile saved!</h2>
		</div>
	</div>
);

const styles = {
	successBox:{
		border:'none',
		background:'white',
		width: '400px',
		height:'300px',
		position:'fixed',
		top:'20%',
		left:'40%',
		borderRadius:'5px',
		boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'
	}
}

export default CheckMark;
