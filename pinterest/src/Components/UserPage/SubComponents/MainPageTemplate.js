import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavPillWrapper from '../Styles/NavPillWrapper';
import PinPill from '../Styles/PinPill';
import HeaderSection from './HeaderSection';
import PinBox from './PinBox';
import Wrapper from '../Styles/Wrapper';
import PinContainer from '../Styles/PinContainer';
import IconWrapper from '../Styles/IconWrapper';
import { Link } from 'react-router-dom';

const MainPageTemplate =({first_name, last_name, avatarURL, desc, email, children, showPills})=> (
		<Wrapper>
			<HeaderSection
				avatarURL={avatarURL}
				firstName={first_name}
				lastName={last_name}
				desc={desc} />

			{
				showPills
				? <NavPillWrapper>
						<Link to={`/${email}`} style={styles.linkStyle}>Home</Link>
						<Link to={`/${email}/pins`} style={styles.linkStyle}>Pins</Link>
						<Link to={`/${email}/saved`} style={styles.linkStyle}>Saved Pins</Link>
					</NavPillWrapper>
				: <NavPillWrapper style={{display:'flex', justifyContent:'center', width: '75%'}}>
						<Link to={`/${email}/pins`} style={styles.linkStyle}>{`${first_name}'s`} Pins</Link>
					</NavPillWrapper>
			}

			<PinContainer>
				{children}
			</PinContainer>
		</Wrapper>
	);

const styles = {
	linkStyle: {
		border: 'none',
		background: '#efefef',
		borderRadius: '30px',
		padding: '10px',
		fontWeight: 700,
		color: '#555555',
		fontSize: '18px',
		textDecoration:'none'
	}
};

export default MainPageTemplate;
