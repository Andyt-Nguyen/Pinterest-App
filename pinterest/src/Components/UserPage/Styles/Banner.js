import styled from 'styled-components';

export default styled.div `
	@media(max-width:800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 10px;
		h1 {
			text-align: center
		}

		p {
			text-align: center;
		}	
	}
`;
