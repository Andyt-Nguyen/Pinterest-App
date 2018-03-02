import styled from 'styled-components';

export default styled.div `
	display: flex;
	justify-content: space-between;
	border: 2px solid red;
	@media(max-width: 800px) {
		flex-direction: column;
		width: 100%;
	}
`;
