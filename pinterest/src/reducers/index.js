import { combineReducers } from 'redux';
import { pinReducer } from './pinReducer';
import { authReducer } from './authReducer';
import { errorSignInReducer } from './errorSignInReducer';
import { errorSignUpReducer } from './errorSignUpReducer'
import { userReducer } from './userReducer';
import { userProfileReducer } from './userProfileReducer';

const rootReducer = combineReducers({
	isAuthenticated: authReducer,
	authInfo: userReducer,
	isErrorSignIn: errorSignInReducer,
	isErrorSignUp: errorSignUpReducer,
	userProfile: userProfileReducer,
	pins: pinReducer
});

export default rootReducer;
