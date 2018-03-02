import styled from 'styled-components';

export default styled.div `
	display:flex;
	justify-content:space-between;
	width: 100%;

	@media(max-width:800px) {
		flex-direction: column;
		width: 80%;
	}
`;
