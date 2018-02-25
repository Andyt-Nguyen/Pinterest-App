import styled from 'styled-components';

export default styled.div `
	display: flex;
	flex-direction: column;
	width: 400px;

	@media(max-width:800px) {
		width: 90%;
	}
`;
