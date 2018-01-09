import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../Styles/Btn';

const HeaderBtns = ({goBack}) => (
	<div style={styles.btnContainer}>
		<Btn onClick={() => goBack()} bg="dodgerblue">
			<span className="fa fa-home" style={{color:'white', fontSize:'15px'}}></span>
			<span style={{color:'white', marginLeft:'5px'}}>Go Back</span>
		</Btn>
		<Btn bg="crimson">
			<Link to="/" style={styles.linkStyle}>
				<span className="fa fa-heart" style={{color:'white'}}></span>
				<span style={{color:'white', marginLeft:'5px'}}>Save</span>
			</Link>
		</Btn>
	</div>
);

const styles = {
	linkStyle: {
		textDecoration: 'none',
		color:'white'
	},
	btnContainer: {
		display:'flex',
		justifyContent:'space-between'
	}
}

export default HeaderBtns;
