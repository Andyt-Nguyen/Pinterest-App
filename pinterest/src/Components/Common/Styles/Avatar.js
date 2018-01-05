import styled from 'styled-components';

const Avatar = styled.div `
	background-image: url('${props => props.cPic}');
	background-size: cover;
	background-position: top-center;
	border-radius: 50%;
`;

export { Avatar }
