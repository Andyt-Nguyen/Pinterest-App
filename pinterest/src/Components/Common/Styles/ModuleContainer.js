import styled from 'styled-components';

const ModuleContainer =  styled.div `
	width: 100%;
	height: 100vh;
	position: absolute;
	z-index: 2;
	background: rgba(0,0,0,0.7);
	padding-top: 50px;
	display: ${props => props.showModule};
	justify-content: ${props => props.position};
`;

export { ModuleContainer }
