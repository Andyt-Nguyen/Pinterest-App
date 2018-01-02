import styled from 'styled-components';

const bg = (props) => {
	if(props.facebook) {
		return '#3c539a';
	} else if(props.google) {
		return 'dodgerblue';
	} else if(props.email) {
		return 'palevioletred';
	} else {
		return 'purple';
	}
}

export default styled.div `
	display: flex;
	align-items: center;
	background: ${bg};
	color: white;
	width: 100%;
	border-radius:5px;
	margin-bottom: 10px;
	cursor: pointer
`;
