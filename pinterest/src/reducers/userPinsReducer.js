import { GET_USER_PINS, NO_USER_PINS } from '../Constants';

export function userPinsReducer(state=[], action) {
	switch (action.type) {
		case GET_USER_PINS:
		if(action.payload === null || action.payload === undefined) {
			return '';
		} else {
			console.log('In reducer',action.payload);
			return action.payload
		}

		case NO_USER_PINS:
			return action.payload;

		default:
			return state;
	}
}
