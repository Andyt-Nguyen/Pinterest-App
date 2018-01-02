import { SHOW_ERROR_SIGN_IN, SHOW_ERROR_SIGN_UP } from '../Constants';

export function errorReducer(state='', action) {
	switch (action.type) {
		case SHOW_ERROR_SIGN_IN:
			return action.payload;

		case SHOW_ERROR_SIGN_UP:
			return action.payload;

		default:
			return state;
	}
}
