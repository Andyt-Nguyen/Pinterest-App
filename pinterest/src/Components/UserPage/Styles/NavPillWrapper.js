import styled from 'styled-components';

export default styled.div `
	display: flex;
	width: 350px;
	margin-left: 10%;
	justify-content: space-between;
	margin-bottom: 20px;

	@media(max-width:800px) {
		justify-content: space-between;
		width: 80%;
	}
`;
