import React from 'react';
import HeadingTitle from '../Styles/HeadingTitle';
import TextArea from '../Styles/TextArea';

const Description = ({desc, onTextChange}) => (
	<div style={styles.marginContainer}>
		<HeadingTitle>Description</HeadingTitle>
		<TextArea
				name="desc"
				value={desc}
				onChange={onTextChange}
				placeholder={'What do you want people to know about you?'}/>
	</div>
);

const styles = {
	marginContainer: {
		marginTop: '30px'
	}
}

export default Description;
