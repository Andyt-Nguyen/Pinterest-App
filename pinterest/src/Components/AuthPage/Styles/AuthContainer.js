import styled, { keyframes } from 'styled-components';

const moveBg = keyframes`
	from { background-position: 0 0 }
	to { background-position: -500px 0 }
`;


export default styled.div `
	background: url('${props => props.wallpaper}') repeat 0 0;
	margin: 0;
	display:flex;
	justify-content:center;
	align-items: center;
	height: 100vh;
	width: 100%;
	animation: ${moveBg} 20s linear infinite;
`;
