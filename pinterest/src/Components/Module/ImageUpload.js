import React from 'react';

const ImageUpload = ({src,onChange}) => (
	<div>
		<label style={styles.labelContainer}>
		<img alt="profilePic" src={src} style={{borderRadius:'50%'}}/>
			<div style={styles.hideInput}>
				<input onChange={onChange} type="file"/>
			</div>
		</label>
	</div>
);


const styles = {
	labelContainer: {
		color:'white',
		padding:'10px',
		textAlign:'center'
	},

	hideInput: {
		background:'red',
		height: '0px',
		width: '0px',
		overflow:'hidden'
	},

}

export default ImageUpload;
