import { GET_PINS, FETCHING_PINS, NO_PINS } from '../Constants';

export function pinReducer(state=[],action) {
	switch (action.type) {
		case GET_PINS:
			return action.payload

		case FETCHING_PINS:
			return action.payload

		case NO_PINS:
			return [action.payload]
		default:
			return state;
	}
}
