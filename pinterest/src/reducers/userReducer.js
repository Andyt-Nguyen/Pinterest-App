import { GET_UID } from '../Constants';

export function userReducer(state='', action) {
	switch (action.type) {
		case GET_UID:
			return action.payload

		default:
			return state;
	}
}
