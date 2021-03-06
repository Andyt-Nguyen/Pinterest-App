import styled from 'styled-components';

export default styled.div `
		border-radius:5px;
		height:525px;
		width:900px;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		position:fixed;
		top:10%;
		left:18%;
		background:white;

		@media(max-width:1030px) {
			left: 2%;
			width: 90%;
		}
`;
