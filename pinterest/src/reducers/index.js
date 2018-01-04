import { combineReducers } from 'redux';
import { pinReducer } from './pinReducer';
import { authReducer } from './authReducer';
import { errorReducer } from './errorReducer';
import { userReducer } from './userReducer';
import { userProfileReducer } from './userProfileReducer';

const rootReducer = combineReducers({
	pins: pinReducer,
	isAuthenticated: authReducer,
	isError: errorReducer,
	authInfo: userReducer,
	userProfile: userProfileReducer
});

export default rootReducer;
