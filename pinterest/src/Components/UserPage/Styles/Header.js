import styled from 'styled-components';

export default styled.div `
	margin: auto;
	display: flex;
	justify-content: space-between;
	width: 80%;

	@media(max-width: 800px) {
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		height: 370px;
		margin-bottom: 40px;
	}
`;
