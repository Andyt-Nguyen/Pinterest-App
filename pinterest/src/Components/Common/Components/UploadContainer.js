import React from 'react';

const UploadContainer = ({src,onChange,picText,children}) => (
	<div>
		<h3 style={{color:'#626065'}}>{picText}</h3>
		<label style={styles.labelContainer}>
			{children}
			<div style={styles.hideInput}>
				<input onChange={onChange} name="avatarFile" type="file" accept="image/*"/>
			</div>
		</label>
	</div>
);


const styles = {
	labelContainer: {
		padding:'10px',
		display:'flex',
		justifyContent:'center',
		cursor:'pointer'
	},

	hideInput: {
		background:'red',
		height: '0px',
		width: '0px',
		overflow:'hidden'
	},
}

export { UploadContainer };
