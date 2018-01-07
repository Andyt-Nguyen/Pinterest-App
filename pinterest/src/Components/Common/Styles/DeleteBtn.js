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
	top:25%;
	left: 6%;
	z-index:100;
	cursor:pointer;
	transition: .4s;

	&:hover {
		background: #bfbfc1;
	}
`;
