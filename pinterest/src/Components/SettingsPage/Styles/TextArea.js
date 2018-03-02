import styled from 'styled-components';

export default styled.textarea `
	height: 200px;
	width: 100%;
	border: none;
	background: #efefef;
	margin-top: 10px;
	resize: none;
	font-size: 20px;

	@media(max-width:800px) {
		width: 90%;
		font-size: 17px;
	}
`;
