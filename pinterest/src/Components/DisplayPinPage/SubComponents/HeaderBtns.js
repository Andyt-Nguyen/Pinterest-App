import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../Styles/Btn';
import BtnContainer from '../Styles/BtnContainer';

const HeaderBtns = ({goBack, savePin, isDeleteBtn, deletePin}) => (
	<BtnContainer>
		<Btn onClick={() => goBack()} bg="dodgerblue">
			<span className="fa fa-home" style={{color:'white', fontSize:'15px'}}></span>
			<span style={{color:'white', marginLeft:'5px'}}>Go Back</span>
		</Btn>
		{
			isDeleteBtn
			? <Btn bg="crimson" onClick={() => deletePin()}>
					<span className="fa fa-heart" style={{color:'white'}}></span>
					<span style={{color:'white', marginLeft:'5px'}}>Delete</span>
				</Btn>
			: <Btn bg="crimson" onClick={() => savePin()}>
					<span className="fa fa-heart" style={{color:'white'}}></span>
					<span style={{color:'white', marginLeft:'5px'}}>Save</span>
				</Btn>
		}
	</BtnContainer>
);

const styles = {
	linkStyle: {
		textDecoration: 'none',
		color:'white'
	},
}

export default HeaderBtns;
