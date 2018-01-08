import { combineReducers } from 'redux';
import { pinReducer } from './pinReducer';
import { authReducer } from './authReducer';
import { userPinsReducer } from './userPinsReducer';
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
	allPins: pinReducer,
	userPins: userPinsReducer
});

export default rootReducer;
