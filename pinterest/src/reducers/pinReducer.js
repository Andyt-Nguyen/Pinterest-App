import { GET_PINS } from '../Constants';

export function pinReducer(state=[], action) {
	switch (action.type) {
		case GET_PINS:
			return action.payload;

		default:
			return state;
	}
}
