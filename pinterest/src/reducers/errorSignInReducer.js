import { NO_ERROR_SIGN_IN, SHOW_ERROR_SIGN_IN } from '../Constants';

export function errorSignInReducer(state='', action) {
	switch (action.type) {
		case NO_ERROR_SIGN_IN:
			return action.payload;

		case SHOW_ERROR_SIGN_IN:
			return action.payload;

		default:
			return state;
	}
}
