import { combineReducers } from 'redux';
import { pinReducer } from './pinReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
	pins: pinReducer,
	isAuthenticated: authReducer
});

export default rootReducer;
