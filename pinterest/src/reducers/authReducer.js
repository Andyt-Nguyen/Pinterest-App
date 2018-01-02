import { LOGGED_IN, LOGGED_OUT } from '../Constants';

export function authReducer(state=false, action) {

	switch (action.type) {
		case LOGGED_IN:
			return action.payload;

		case LOGGED_OUT:
			return action.payload;

		default:
			return state;
	}
};
