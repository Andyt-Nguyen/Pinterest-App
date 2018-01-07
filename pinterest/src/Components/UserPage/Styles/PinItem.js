import styled from 'styled-components';

export default styled.div `
	margin-top: 7px;
	width: 330px;
	height: 200px;
	border-radius: 5px;
	background: #efefef;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('${props => props.bg}');
	background-size: cover;
	background-position: center;
`;
