import styled from 'styled-components';

export default styled.div `
	width: 180px;
	height: 180px;
	background-image: url('${props => props.cPic}');
	background-size: cover;
	background-position: top-center;
	border-radius: 50%;
`;
