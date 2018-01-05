import styled from 'styled-components';

const bg = (props) => {
	if(props.primary) {
		return 'dodgerblue';
	} else if(props.warning) {
		return 'goldenrod';
	} else if(props.danger) {
		return 'crimson';
	} else if(props.success) {
		return 'limegreen';
	} else {
		return 'grey';
	}
}

const fontSize = (props) => {
	if(props.sm) {
		return '20px';
	} else if(props.md) {
		return '23px';
	} else if(props.lg) {
		return '28px';
	} else {
		return '23px'
	}
}

const Button = styled.button `
	cursor: pointer;
	color: white;
	padding: 10px;
	border: none;
	border-radius: 3px;
	background: ${bg};
	font-size: ${fontSize};
	transition: 0.4s;

	&:hover {
		background: rebeccapurple;
	}
`;

export { Button }
