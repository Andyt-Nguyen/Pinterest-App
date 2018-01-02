import { combineReducers } from 'redux';
import { pinReducer } from './pinReducer';
import { authReducer } from './authReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
	pins: pinReducer,
	isAuthenticated: authReducer,
	isError: errorReducer
});

export default rootReducer;
