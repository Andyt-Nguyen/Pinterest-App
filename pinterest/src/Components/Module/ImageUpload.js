import React from 'react';
import ArrowBox from './Style/ArrowBox';

const ImageUpload = ({src,onChange,picText,children}) => (
	<div style={{position:'relative'}}>
		<ArrowBox>
			<p>{picText}</p>
		</ArrowBox>
		<label style={styles.labelContainer}>
			{children}
			<div style={styles.hideInput}>
				<input onChange={onChange} type="file"/>
			</div>
		</label>
	</div>
);


const styles = {
	labelContainer: {
		padding:'10px',
		display:'flex',
		justifyContent:'center'
	},

	hideInput: {
		background:'red',
		height: '0px',
		width: '0px',
		overflow:'hidden'
	},

}

export default ImageUpload;
