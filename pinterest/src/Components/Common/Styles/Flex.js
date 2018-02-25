import styled from 'styled-components';

export default styled.div `
	display: flex;
	justify-content: space-around;

	@media(max-width:800px) {
	flex-direction: column;
	align-items: center;
	justify-content: center;
	}
`;
