import styled from 'styled-components';

export default styled.div `
	position: relative;
	border-radius:10px;
	padding: 10px;
	width: 236px;
	transition: 0.4s;

	> .save {
		display:none;
	}

	&:hover {
		opacity:.8;
		background: #e5e5e5;

		> div {
			display: block;
		}
	}
`;
