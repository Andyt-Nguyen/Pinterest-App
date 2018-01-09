import React from 'react';

const MainPic = ({pinURL}) => (
	<div style={styles.mainPicPosition}>
		<img width="500px" src={pinURL} style={{borderRadius:'5px'}}/>
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
