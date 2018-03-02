import styled from 'styled-components';

export default styled.div `
	padding:5px 30px;
	border-radius:5px;
	background:white;
	margin:30px;
	width: 50%;

	@media(max-width:800px) {
		width: 80%;
		height: 110%;
	}
`;
