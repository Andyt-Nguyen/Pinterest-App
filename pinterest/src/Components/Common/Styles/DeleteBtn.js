import styled from 'styled-components';

export default styled.div `
	display:flex;
	justify-content:center;
	align-items:center;
	height: 23px;
	width: 23px;
	padding:1px;
	border-radius: 50%;
	border: 2px solid #bfbfc1;
	background: #efefef;
	position:absolute;
	top:0;
	left: 0;
	transition: .4s;

	&:hover {
		background: #bfbfc1;
	}
`;
