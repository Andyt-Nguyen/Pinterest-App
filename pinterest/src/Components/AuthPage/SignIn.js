import React from 'react';
import { SocialIcon } from 'react-social-icons';
import AuthContainer from './Styles/AuthContainer';
import AuthBox from './Styles/AuthBox';
import InputContainer from './Styles/InputContainer';
import Input from './Styles/Input';
import Button from './Styles/Button';
import ThirdPartyContainer from './Styles/ThirdPartyContainer';
import SocialText from './Styles/SocialText';
import googleLogo from './google_dark2.svg';

const SignIn = ({onTextChange, createUser, signWithGoogle, showEmail, wallpaper, goToLogin, ph, text, showError}) => (
	<AuthContainer wallpaper={wallpaper}>
		<AuthBox>

			<SocialIcon network="pinterest" style={styles.pinterestIcon} />
			<h1 style={styles.greyText}>{text}</h1>
			<InputContainer>
				<p style={styles.errorMessage}>{showError}</p>
				<br />
				<Input
						type="text"
						name="email"
						onChange={onTextChange}
						placeholder="Email" />

				<Input
						type="text"
						name="password"
						onChange={onTextChange}
						placeholder={ph} />

				<Button onClick={() => createUser()}>Continue</Button>
				<p style={{padding: '15px', color:'#555555', fontWeight:700, fontSize:'13px' }}>OR</p>

				<ThirdPartyContainer google onClick={() => signWithGoogle()}>
					<img src={googleLogo}/>
					<SocialText>Continue With Google</SocialText>
				</ThirdPartyContainer>

				<ThirdPartyContainer facebook>
					<SocialIcon network="facebook" color="white" style={styles.socialIcon} />
					<SocialText>Continue With Facebook</SocialText>
				</ThirdPartyContainer>

				{ showEmail
						? <ThirdPartyContainer email onClick={() => goToLogin()}>
								<SocialIcon network="email" color="white" style={styles.socialIcon} />
								<SocialText>Continue With Email</SocialText>
							</ThirdPartyContainer>
					  : <ThirdPartyContainer email2 onClick={() => goToLogin()}>
								<SocialIcon network="email" color="white" style={styles.socialIcon} />
								<SocialText>Back to Sign up</SocialText>
							</ThirdPartyContainer>
				}
			</InputContainer>
		</AuthBox>
	</AuthContainer>
);


const styles = {
	pinterestIcon: {
		height: 80,
		width: 80,
		marginBottom: '10px'
	},

	socialIcon: {
		width:'45px',
		height: '45px'
	},

	greyText: {
		color:'#555555'
	},

	errorMessage: {
		color: 'red',
		padding: '10px 0 5px 0',
		textAlign: 'center'
	}

}

export default SignIn;
