import { combineReducers } from 'redux';
import { pinReducer } from './pinReducer';
import { authReducer } from './authReducer';
import { errorReducer } from './errorReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
	pins: pinReducer,
	isAuthenticated: authReducer,
	isError: errorReducer,
	userId: userReducer
});

export default rootReducer;
