import styled from 'styled-components';

export default styled.div `
	width: 100%;
	border: none;
	border-radius: 5px;
	background: #efefef;
	font-size: 18px;
	font-weight: 700;
	color: #555555;
	padding: 10px;

	@media(max-width: 800px) {
		width: 90%;
	}
`;
