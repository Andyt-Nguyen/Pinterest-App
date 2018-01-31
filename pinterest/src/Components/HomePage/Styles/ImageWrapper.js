import styled from 'styled-components';

export default styled.div `
	@media (min-width: 1550px) {
		width: 310px;
	}

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

	@media (max-width: 1030px) {
		width: 176px;
	}

	@media (max-width: 670px) {
		width: 150px;
	}

`;
