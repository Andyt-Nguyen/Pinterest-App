import styled from 'styled-components';

const DropDownContainer = styled.div `
	position:absolute;
	right: 5px;
	top: 60px;
	height:85px; width:150px;
	background-color:#FFF;
	box-shadow:rgba(0,0,0, 0.2) 0px 1px 3px;
	border-radius:5px;
	z-index: 5;

	&:before {
		position:absolute;
	  top:-10px; right:10px;
	  content: '';
	  width: 0;
	  height: 0;
	  border-left: 10px solid transparent;
	  border-right: 10px solid transparent;
	  border-bottom: 10px solid white;
	  z-index:2;
	}

	&:after {
		position:absolute;
	  top:-12px; right:8px;
	  content: '';
	  width: 0;
	  height: 0;
	  border-left: 12px solid transparent;
	  border-right: 12px solid transparent;
	  border-bottom: 12px solid rgba(0,0,0, 0.03);
	  z-index:1;
	}
`;

export default DropDownContainer;
