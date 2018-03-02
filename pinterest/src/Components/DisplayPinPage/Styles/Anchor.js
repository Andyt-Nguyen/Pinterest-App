import styled from 'styled-components';

export default styled.a `
	color: #555555;
	text-decoration: none;
	transition: 0.4s;

	&:hover {
		color: red;
	}

	@media(max-width:800px) {
		font-size: 12px;
	}
`;
