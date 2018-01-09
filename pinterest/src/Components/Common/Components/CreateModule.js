import React from 'react';
import { Button } from '../Styles/Button';
import { UploadContainer } from './UploadContainer';
import ModuleLayout from '../Styles/ModuleLayout';
import HeaderLogo from './HeaderLogo';
import DottedBoxImage from '../Styles/DottedBoxImage';
import DeleteBtn from '../Styles/DeleteBtn';

const CreateModule = ({title,showError, hideModule, onChange, previewImage, children, removeImage, onDescChange, onUrlChange, submitPin, urlVal, descVal, showDelete, onDelete}) => (
	<ModuleLayout>
		<HeaderLogo hideModule={hideModule}/>
		<div style={{overflow:'scroll', height:'380px', position:'relative'}}>


			<div style={styles.headerMargin}>
				<h1>{title}</h1>
			</div>

			<div style={styles.flexHalf}>
				{
					previewImage !== ''
					? <DeleteBtn>
							<span onClick={removeImage}>&#10006;</span>
						</DeleteBtn>
					: ''
				}

				<UploadContainer onChange={onChange}>
					{
						previewImage !== ''
						? <div style={styles.imageBox}>
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
							onChange={onUrlChange}
							value={urlVal} />

					<p style={{marginTop:'15px'}}>Description</p>
					<textarea
						onChange={onDescChange}
						value={descVal}
						placeholder="Got something to say?"
						style={styles.descStyle} />
						
				</div>
			</div>
		</div>



		<div style={{borderTop:'1px solid #efefef', margin:'10px 0'}}></div>
		<div style={{display:'flex', justifyContent:'space-between'}}>
			{
				showDelete
				? <Button onClick={() => onDelete()} style={{marginTop:'10px', fontSize:'20px', marginLeft:'10px'}} danger>Delete</Button>
				: ''
			}
			{
				previewImage !== ''
				?	<Button onClick={() => submitPin()} style={{marginTop:'10px', fontSize:'20px', marginRight:'10px'}} primary>Save</Button>
				:	<Button style={{marginTop:'10px', fontSize:'20px', marginRight:'10px'}}>Save</Button>
			}
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
