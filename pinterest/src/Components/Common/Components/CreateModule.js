import React from 'react';
import { Button } from '../Styles/Button';
import { UploadContainer } from './UploadContainer';
import ModuleLayout from '../Styles/ModuleLayout';
import HeaderLogo from './HeaderLogo';
import DottedBoxImage from '../Styles/DottedBoxImage';
import DeleteBtn from '../Styles/DeleteBtn';

const CreateModule = ({showError, hideModule, onChange, previewImage, children, removeImage, onDescChange, onUrlChange, submitPin}) => (
	<ModuleLayout>
		<HeaderLogo hideModule={hideModule}/>
		<div style={styles.headerMargin}>
			<h1>Create Pin</h1>
		</div>

		<div style={styles.flexHalf}>
			<UploadContainer onChange={onChange}>
			{
				previewImage !== ''
				? <div style={styles.imageBox}>
					<DeleteBtn>
						<span onClick={removeImage}>&#10006;</span>
					</DeleteBtn>
						<DottedBoxImage src={previewImage} />
					</div>
				: <div style={styles.dottedBox}>
						<span className="fa fa-camera" style={{display:'block', fontSize:'30px'}}></span>
						<h2 style={{color:'#bfbfc1'}}>Click to upload a file</h2>
					</div>
			}

			</UploadContainer>

			<div style={styles.columnItems}>
				<p>Website</p>
				<input
						placeholder="Optional"
						type="text"
						style={styles.inputStyle}
						onChange={onUrlChange}/>
				<p style={{marginTop:'15px'}}>Description</p>
				<textarea
					onChange={onDescChange}
					placeholder="Got something to say?"
					style={styles.descStyle} />
					{
						previewImage !== ''
						?	<Button onClick={() => submitPin()} style={{marginTop:'10px'}} primary>Save</Button>
						:	<Button style={{marginTop:'10px'}}>Save</Button>
					}

			</div>
		</div>
	</ModuleLayout>
);

const styles = {
	headerMargin: {
		margin:'15px 0',
		textAlign:'center',
		color:'#bfbfc1'
	},

	flexHalf: {
		display:'flex',
		justifyContent:'space-around'
	},
	dottedBox: {
		width:'300px',
		height:'300px',
		border:'2px dotted #bfbfc1',
		background: '#efefef',
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		boxSizing: 'border-box'
	},

	imageBox: {
		width:'300px',
		border:'2px solid #bfbfc1',
		padding: '5px',
		borderRadius: '5px',
		position:'relative'
	},

	columnItems: {
		display:'flex',
		flexDirection:'column',
		width:'400px'
	},

	inputStyle: {
		width:'100%',
		border:'none',
		borderRadius:'5px',
		background:'#efefef',
		fontSize:'25px',
		marginTop:'10px'
	},

	descStyle: {
		width:'100%',
		height:'100px',
		background:'#efefef',
		border:'none',
		borderRadius:'5px',
		resize:'none',
		marginTop:'10px',
		fontSize:'20px'
	}
}

export { CreateModule }
