import { SHOW_ERROR } from '../Constants';

export function errorReducer(state='', action) {
	switch (action.type) {
		case SHOW_ERROR:
			return action.payload

		default:
			return state;
	}
}
