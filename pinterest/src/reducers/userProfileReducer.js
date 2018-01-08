import { GET_USER_PROFILE } from '../Constants';

export function userProfileReducer(state='', action) {
	switch (action.type) {
		case GET_USER_PROFILE:
		if(action.payload === null) {
			return []
		} else {
			return action.payload
		}

		default:
			return state;
	}
}
