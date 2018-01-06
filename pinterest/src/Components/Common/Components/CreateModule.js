import React from 'react';
import { Button } from '../Styles/Button';
import ModuleLayout from '../Styles/ModuleLayout';
import HeaderLogo from './HeaderLogo';

const CreateModule = ({hideModule, children}) => (
	<ModuleLayout>
		<HeaderLogo hideModule={hideModule}/>
		<div style={styles.headerMargin}>
			<h1>Create Pin</h1>
		</div>

		<div style={styles.flexHalf}>
			<div style={styles.dottedBox}>
				<h2 style={{color:'#bfbfc1'}}>Add File</h2>
			</div>

			<div style={styles.columnItems}>
				<p>Website</p>
				<input placeholder="Optional" type="text" style={styles.inputStyle}/>
				<p style={{marginTop:'15px'}}>Description</p>
				<textarea
					placeholder="Got something to say?"
					style={styles.descStyle}/>
				<Button style={{marginTop:'10px'}} primary>Save</Button>
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
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
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
