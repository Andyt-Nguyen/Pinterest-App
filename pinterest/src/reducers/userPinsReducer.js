import { GET_USER_PINS } from '../Constants';

export function userPinsReducer(state=[], action) {
	switch (action.type) {
		case GET_USER_PINS:
			return action.payload;
		default:
			return state;
	}
}
