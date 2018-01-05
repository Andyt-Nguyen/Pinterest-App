import { NO_ERROR_SIGN_UP, SHOW_ERROR_SIGN_UP } from '../Constants';

export function errorSignUpReducer(state='',action) {
	switch (action.type) {
		case NO_ERROR_SIGN_UP:
			return action.payload;
			
		case SHOW_ERROR_SIGN_UP:
			return action.payload;

		default:
			return state;
	}
}
