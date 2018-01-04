import { combineReducers } from 'redux';
import { pinReducer } from './pinReducer';
import { authReducer } from './authReducer';
import { errorReducer } from './errorReducer';
import { userReducer } from './userReducer';
import { moduleReducer } from './moduleReducer';

const rootReducer = combineReducers({
	pins: pinReducer,
	isAuthenticated: authReducer,
	isError: errorReducer,
	authInfo: userReducer,
	hideModule: moduleReducer
});

export default rootReducer;
