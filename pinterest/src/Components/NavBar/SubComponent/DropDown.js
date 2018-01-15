import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDownContainer from '../Styles/DropDownContainer';
const DropDown = ({signOut, closeDropDown}) => (
	<DropDownContainer>
		<ul style={styles.ulStyle}>
			<li style={{color:'#676767', borderBottom:'1px solid #ccc', padding:'10px'}}>
				<NavLink activeStyle={styles.activeStyle} to="/settings" style={{color:'#626065',textDecoration:'none'}}>
					<span onClick={() => closeDropDown()}>Account</span>
				</NavLink>
			</li>
			<li style={{color:'#676767', padding:'10px'}}>
				<span style={{cursor:'pointer'}} onClick={() => signOut()}>Sign Out</span>
			</li>
		</ul>
	</DropDownContainer>
);

const styles = {
	ulStyle:{
		listStyle:'none',
		padding:0,
		margin:0,
	},
	activeStyle: {
		color:'#555555'
	}
}

export default DropDown;
