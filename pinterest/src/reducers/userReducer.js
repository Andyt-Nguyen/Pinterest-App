import { GET_AUTH_INFO } from '../Constants';

export function userReducer(state='', action) {
	switch (action.type) {
		case GET_AUTH_INFO:
			return action.payload

		default:
			return state;
	}
}
