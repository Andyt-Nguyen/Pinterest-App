import { GET_USER_PINS, DELETE_PIN } from '../Constants';

export function userPinsReducer(state=[], action) {
	switch (action.type) {
		case GET_USER_PINS:
		if(action.payload === null || action.payload === undefined) {
			return '';
		} else {
			return action.payload
		}

		case DELETE_PIN:
			return action.payload;

		default:
			return [];
	}
}
