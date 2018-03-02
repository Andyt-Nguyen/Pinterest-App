import React from 'react';
import MainImage from '../Styles/MainImage';

const MainPic = ({pinURL}) => (
	<div style={styles.mainPicPosition}>
		<MainImage src={pinURL}/>
	</div>
);

const styles = {
	mainPicPosition: {
		display:'flex',
		flexDirection:'column',
		alignItems:'center'
	}
}
export default MainPic;
